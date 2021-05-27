import { DiscordMessageScheduleNoonCountService } from './discord-message-schedule-noon-count.service';
import { AbstractService } from '../../../../../classes/services/abstract.service';
import { ServiceNameEnum } from '../../../../../enums/service-name.enum';
import { getEveryHourScheduleRule } from '../../../../../functions/schedule/get-every-hour-schedule-rule';
import { isUpToDateFirebaseGuild } from '../../../../firebase/functions/guilds/is-up-to-date-firebase-guild';
import { FirebaseGuildsChannelsFeaturesNoonEnabledStateService } from '../../../../firebase/services/guilds/channels/features/noon/firebase-guilds-channels-features-noon-enabled-state.service';
import { FirebaseGuildsService } from '../../../../firebase/services/guilds/firebase-guilds.service';
import { IFirebaseGuildChannel } from '../../../../firebase/types/guilds/channels/firebase-guild-channel';
import { IFirebaseGuild } from '../../../../firebase/types/guilds/firebase-guild';
import { IFirebaseGuildVFinal } from '../../../../firebase/types/guilds/firebase-guild-v-final';
import { ChalkService } from '../../../../logger/services/chalk/chalk.service';
import { LoggerService } from '../../../../logger/services/logger.service';
import { getNextJobDate } from '../../../../schedules/functions/get-next-job-date';
import { getNextJobDateHumanized } from '../../../../schedules/functions/get-next-job-date-humanized';
import { TimezoneEnum } from '../../../../time/enums/timezone.enum';
import { isDiscordGuildChannelWritable } from '../../../channels/functions/types/is-discord-guild-channel-writable';
import { DiscordGuildSoniaChannelNameEnum } from '../../../guilds/enums/discord-guild-sonia-channel-name.enum';
import { DiscordGuildConfigService } from '../../../guilds/services/config/discord-guild-config.service';
import { DiscordGuildSoniaService } from '../../../guilds/services/discord-guild-sonia.service';
import { DiscordLoggerErrorService } from '../../../logger/services/discord-logger-error.service';
import { DiscordClientService } from '../../../services/discord-client.service';
import { IDiscordMessageResponse } from '../../interfaces/discord-message-response';
import { Guild, GuildChannel, Message } from 'discord.js';
import _ from 'lodash';
import moment from 'moment-timezone';
import { Job, scheduleJob } from 'node-schedule';

const NOON_HOUR = 12;

export class DiscordMessageScheduleNoonService extends AbstractService {
  private static _instance: DiscordMessageScheduleNoonService;

  public static getInstance(): DiscordMessageScheduleNoonService {
    if (_.isNil(DiscordMessageScheduleNoonService._instance)) {
      DiscordMessageScheduleNoonService._instance = new DiscordMessageScheduleNoonService();
    }

    return DiscordMessageScheduleNoonService._instance;
  }

  private readonly _rule: string = getEveryHourScheduleRule();
  private _job: Job | undefined = undefined;

  public constructor() {
    super(ServiceNameEnum.DISCORD_MESSAGE_SCHEDULE_NOON_SERVICE);
  }

  public init(): void {
    this.startSchedule();
  }

  public startSchedule(): void {
    this._createSchedule();
  }

  public sendMessage(guild: Readonly<Guild>): Promise<(Message | void)[] | void> {
    this._logFetchingFirebaseGuild(guild);

    return FirebaseGuildsService.getInstance()
      .getGuild(guild.id)
      .then(
        (firebaseGuild: Readonly<IFirebaseGuild | null | undefined>): Promise<(Message | void)[]> => {
          this._logFirebaseGuildFetched(guild);

          if (!this._isValidGuild(firebaseGuild)) {
            this._logInvalidFirebaseGuild(guild);

            return Promise.reject(new Error(`Invalid guild`));
          }

          this._logValidFirebaseGuild(guild);

          return Promise.all(
            _.map(
              firebaseGuild.channels,
              (channel: Readonly<IFirebaseGuildChannel>): Promise<Message | void> =>
                this.sendMessageByChannel(channel, firebaseGuild, guild).catch((): Promise<void> => Promise.resolve())
            )
          );
        }
      );
  }

  public sendMessageByChannel(
    channel: Readonly<IFirebaseGuildChannel>,
    firebaseGuild: Readonly<IFirebaseGuildVFinal>,
    guild: Readonly<Guild>
  ): Promise<Message | void> {
    if (!FirebaseGuildsChannelsFeaturesNoonEnabledStateService.getInstance().isEnabled(channel, firebaseGuild)) {
      this._logFirebaseGuildChannelNoonDisabled(guild, channel);

      return Promise.reject(new Error(`Noon state disabled`));
    }

    this._logFirebaseGuildChannelNoonEnabled(guild, channel);

    const guildChannel: GuildChannel | undefined = guild.channels.cache.get(channel.id as string);

    if (_.isNil(guildChannel)) {
      this._logInValidDiscordGuildChannel(guild, channel);

      return Promise.reject(new Error(`Guild channel not found`));
    }

    this._logValidDiscordGuildChannel(guild, channel);

    return this.sendMessageResponse(guildChannel);
  }

  public handleMessages(): Promise<((Message | void)[] | void)[] | void> {
    if (!this._canSendMessage()) {
      return Promise.reject(new Error(`Can not send message`));
    }

    const messagePromises: Promise<(Message | void)[] | void>[] = [];

    DiscordClientService.getInstance()
      .getClient()
      .guilds.cache.forEach((guild: Readonly<Guild>): void => {
        messagePromises.push(
          this.sendMessage(guild).catch(
            (): Promise<void> => {
              this._logNoMessageSentForFirebaseGuild(guild);

              return Promise.resolve();
            }
          )
        );
      });

    return Promise.all(messagePromises);
  }

  public sendMessageResponse(guildChannel: Readonly<GuildChannel>): Promise<Message | void> {
    const messageResponse: IDiscordMessageResponse = this._getMessageResponse();

    if (!isDiscordGuildChannelWritable(guildChannel)) {
      this._logGuildChannelNotWritable(guildChannel);

      return Promise.reject(new Error(`Guild channel not writable`));
    }

    this._logSendingMessagesForNoon(guildChannel);

    return guildChannel
      .send(messageResponse.response, messageResponse.options)
      .then(
        (message: Message): Promise<Message> => {
          this._logNoonMessageSent(guildChannel);

          return Promise.resolve(message);
        }
      )
      .catch(
        (error: Readonly<string>): Promise<void> => {
          this._onMessageError(error, guildChannel);

          return Promise.reject(error);
        }
      );
  }

  public executeJob(): Promise<((Message | void)[] | void)[] | void> {
    this._logJobTriggered();
    this._logNextJobDate();

    return this.handleMessages()
      .then((guildMessages: ((Message | void)[] | void)[] | void): void => {
        DiscordMessageScheduleNoonCountService.getInstance().countChannelsAndGuilds(guildMessages);
      })
      .catch((): void => {
        this._logCouldNotHandleMessages();
      });
  }

  private _isValidGuild(
    firebaseGuild: Readonly<IFirebaseGuild | null | undefined>
  ): firebaseGuild is IFirebaseGuildVFinal {
    return !_.isNil(firebaseGuild) && isUpToDateFirebaseGuild(firebaseGuild);
  }

  private _createSchedule(): void {
    this._logJobRule(this._rule, `job`);

    this._job = scheduleJob(this._rule, (): void => {
      void this.executeJob();
    });

    this._logNextJobDate();
  }

  private _logJobTriggered(): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(`job triggered`),
    });
  }

  private _logCouldNotHandleMessages(): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(`could not handle the messages`),
    });
  }

  private _logFetchingFirebaseGuild({ id }: Readonly<Guild>): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(`fetching Firebase guild ${ChalkService.getInstance().value(id)}`),
    });
  }

  private _logFirebaseGuildFetched({ id }: Readonly<Guild>): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(`Firebase guild ${ChalkService.getInstance().value(id)} fetched`),
    });
  }

  private _logValidFirebaseGuild({ id }: Readonly<Guild>): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(`Firebase guild ${ChalkService.getInstance().value(id)} is valid`),
    });
  }

  private _logInvalidFirebaseGuild({ id }: Readonly<Guild>): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(`Firebase guild ${ChalkService.getInstance().value(id)} is invalid`),
    });
  }

  private _logNoMessageSentForFirebaseGuild({ id }: Readonly<Guild>): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(
        `no message sent for Firebase guild ${ChalkService.getInstance().value(id)}`
      ),
    });
  }

  private _logFirebaseGuildChannelNoonEnabled(
    { id }: Readonly<Guild>,
    guildChannel: Readonly<IFirebaseGuildChannel>
  ): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(
        `Firebase guild ${ChalkService.getInstance().value(id)} channel ${ChalkService.getInstance().value(
          guildChannel.id
        )} noon feature is enabled`
      ),
    });
  }

  private _logFirebaseGuildChannelNoonDisabled(
    { id }: Readonly<Guild>,
    guildChannel: Readonly<IFirebaseGuildChannel>
  ): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(
        `Firebase guild ${ChalkService.getInstance().value(id)} channel ${ChalkService.getInstance().value(
          guildChannel.id ?? `unknown`
        )} noon feature is disabled`
      ),
    });
  }

  private _logValidDiscordGuildChannel({ id }: Readonly<Guild>, guildChannel: Readonly<IFirebaseGuildChannel>): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(
        `Discord guild ${ChalkService.getInstance().value(id)} channel ${ChalkService.getInstance().value(
          guildChannel.id
        )} is valid`
      ),
    });
  }

  private _logInValidDiscordGuildChannel({ id }: Readonly<Guild>, guildChannel: Readonly<IFirebaseGuildChannel>): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(
        `Discord guild ${ChalkService.getInstance().value(id)} channel ${ChalkService.getInstance().value(
          guildChannel.id
        )} is invalid`
      ),
    });
  }

  private _logNextJobDate(): void {
    if (!_.isNil(this._job)) {
      LoggerService.getInstance().logJobDate({
        context: this._serviceName,
        jobDate: getNextJobDate(this._job),
        jobDateHumanized: getNextJobDateHumanized(this._job),
        jobName: `next`,
      });
    }
  }

  private _getMessageResponse(): IDiscordMessageResponse {
    return {
      options: {
        split: false,
      },
      response: `Il est midi!`,
    };
  }

  private _canSendMessage(): boolean {
    if (!DiscordGuildConfigService.getInstance().shouldSendNoonMessage()) {
      this._logNoonMessageSendingDisabled();

      return false;
    }

    if (!this._isNoonInParis()) {
      this._logNotNoonInParis();

      return false;
    }

    return true;
  }

  private _logNotNoonInParis(): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(`not noon in Paris`),
    });
  }

  private _logNoonMessageSendingDisabled(): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(`noon message sending disabled`),
    });
  }

  private _isNoonInParis(): boolean {
    return _.isEqual(moment().tz(TimezoneEnum.PARIS).get(`hour`), NOON_HOUR);
  }

  private _logSendingMessagesForNoon({ id }: Readonly<GuildChannel>): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(
        `sending message for noon for guild channel ${ChalkService.getInstance().value(id)}...`
      ),
    });
  }

  private _logNoonMessageSent({ id }: Readonly<GuildChannel>): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(
        `noon message sent for guild channel ${ChalkService.getInstance().value(id)}`
      ),
    });
  }

  private _logGuildChannelNotWritable({ id }: Readonly<GuildChannel>): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(
        `the guild channel ${ChalkService.getInstance().value(id)} is not writable`
      ),
    });
  }

  private _onMessageError(error: Readonly<string>, guildChannel: Readonly<GuildChannel>): void {
    this._messageErrorLog(error, guildChannel);
    this._sendMessageToSoniaDiscord(error);
  }

  private _messageErrorLog(error: Readonly<string>, { id }: Readonly<GuildChannel>): void {
    LoggerService.getInstance().error({
      context: this._serviceName,
      message: ChalkService.getInstance().text(
        `noon message sending failed for guild channel ${ChalkService.getInstance().value(id)}`
      ),
    });
    LoggerService.getInstance().error({
      context: this._serviceName,
      message: ChalkService.getInstance().error(error),
    });
  }

  private _sendMessageToSoniaDiscord(error: Readonly<string>): void {
    DiscordGuildSoniaService.getInstance().sendMessageToChannel({
      channelName: DiscordGuildSoniaChannelNameEnum.ERRORS,
      messageResponse: DiscordLoggerErrorService.getInstance().getErrorMessageResponse(error),
    });
  }

  private _logJobRule(rule: Readonly<string>, jobName: Readonly<string>): void {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: ChalkService.getInstance().text(`${jobName} rule: ${ChalkService.getInstance().value(rule)}`),
    });
  }
}
