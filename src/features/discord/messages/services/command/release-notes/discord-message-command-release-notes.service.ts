import { AbstractService } from '../../../../../../classes/services/abstract.service';
import { ServiceNameEnum } from '../../../../../../enums/service-name.enum';
import { AppConfigReleaseTypeEnum } from '../../../../../app/enums/app-config-release-type.enum';
import { AppConfigQueryService } from '../../../../../app/services/config/app-config-query.service';
import { AppConfigService } from '../../../../../app/services/config/app-config.service';
import { IAppReleaseTypeResponsesFactoryPattern } from '../../../../../app/types/app-release-type-responses-factory-pattern';
import { LoggerService } from '../../../../../logger/services/logger.service';
import { DiscordSoniaService } from '../../../../users/services/discord-sonia.service';
import { DiscordMessageCommandEnum } from '../../../enums/commands/discord-message-command.enum';
import { discordHasThisCommand } from '../../../functions/commands/checks/discord-has-this-command';
import { IDiscordMessageResponse } from '../../../interfaces/discord-message-response';
import { IAnyDiscordMessage } from '../../../types/any-discord-message';
import { DiscordMessageConfigService } from '../../config/discord-message-config.service';
import { MessageEmbedAuthor, MessageEmbedFooter, MessageEmbedOptions, MessageEmbedThumbnail } from 'discord.js';
import _ from 'lodash';
import moment from 'moment-timezone';

export class DiscordMessageCommandReleaseNotesService extends AbstractService {
  private static _instance: DiscordMessageCommandReleaseNotesService;

  public static getInstance(): DiscordMessageCommandReleaseNotesService {
    if (_.isNil(DiscordMessageCommandReleaseNotesService._instance)) {
      DiscordMessageCommandReleaseNotesService._instance = new DiscordMessageCommandReleaseNotesService();
    }

    return DiscordMessageCommandReleaseNotesService._instance;
  }

  public constructor() {
    super(ServiceNameEnum.DISCORD_MESSAGE_COMMAND_RELEASE_NOTES_SERVICE);
  }

  public handleResponse({ id }: Readonly<IAnyDiscordMessage>): Promise<IDiscordMessageResponse> {
    LoggerService.getInstance().debug({
      context: this._serviceName,
      hasExtendedContext: true,
      message: LoggerService.getInstance().getSnowflakeContext(id, `release notes command detected`),
    });

    return this.getMessageResponse();
  }

  public getMessageResponse(): Promise<IDiscordMessageResponse> {
    return Promise.resolve({
      options: {
        embed: this._getMessageEmbed(),
        split: false,
      },
      response: ``,
    });
  }

  public hasCommand(message: Readonly<string>): boolean {
    return discordHasThisCommand({
      commands: [DiscordMessageCommandEnum.RELEASE_NOTES, DiscordMessageCommandEnum.R],
      message,
      prefixes: DiscordMessageConfigService.getInstance().getMessageCommandPrefix(),
    });
  }

  private _getMessageEmbed(): MessageEmbedOptions {
    return {
      author: this._getMessageEmbedAuthor(),
      color: this._getMessageEmbedColor(),
      description: this._getMessageDescription(),
      footer: this._getMessageEmbedFooter(),
      thumbnail: this._getMessageEmbedThumbnail(),
      timestamp: this._getMessageEmbedTimestamp(),
      title: this._getMessageEmbedTitle(),
    };
  }

  private _getMessageEmbedAuthor(): MessageEmbedAuthor {
    return DiscordSoniaService.getInstance().getCorporationMessageEmbedAuthor();
  }

  private _getMessageEmbedThumbnail(): MessageEmbedThumbnail {
    const releaseType: AppConfigReleaseTypeEnum = AppConfigService.getInstance().getReleaseType();
    const responsesFactoryPattern: IAppReleaseTypeResponsesFactoryPattern<MessageEmbedThumbnail> = {
      [AppConfigReleaseTypeEnum.BUG_FIXES](): MessageEmbedThumbnail {
        return {
          url: DiscordMessageConfigService.getInstance().getMessageCommandReleaseNotesBugFixesImageUrl(),
        };
      },
      [AppConfigReleaseTypeEnum.FEATURES](): MessageEmbedThumbnail {
        return {
          url: DiscordMessageConfigService.getInstance().getMessageCommandReleaseNotesFeaturesImageUrl(),
        };
      },
      [AppConfigReleaseTypeEnum.MIXED](): MessageEmbedThumbnail {
        return {
          url: DiscordMessageConfigService.getInstance().getMessageCommandReleaseNotesMixedImageUrl(),
        };
      },
      [AppConfigReleaseTypeEnum.PERFORMANCE_IMPROVEMENTS](): MessageEmbedThumbnail {
        return {
          url: DiscordMessageConfigService.getInstance().getMessageCommandReleaseNotesPerformanceImprovementsImageUrl(),
        };
      },
      [AppConfigReleaseTypeEnum.UNKNOWN](): MessageEmbedThumbnail {
        return {
          url: DiscordMessageConfigService.getInstance().getMessageCommandReleaseNotesUnknownImageUrl(),
        };
      },
    };

    return responsesFactoryPattern[releaseType]();
  }

  private _getMessageEmbedFooter(): MessageEmbedFooter {
    const soniaImageUrl: string | null = DiscordSoniaService.getInstance().getImageUrl();
    const totalReleaseCountHumanized: string = AppConfigQueryService.getInstance().getTotalReleaseCountHumanized();
    const firstReleaseDate: string = AppConfigQueryService.getInstance().getFirstReleaseDateFormatted(
      `[the ]Do MMMM YYYY`
    );

    return {
      iconURL: soniaImageUrl ?? undefined,
      text: `${totalReleaseCountHumanized} since ${firstReleaseDate}`,
    };
  }

  private _getMessageEmbedColor(): number {
    const releaseType: AppConfigReleaseTypeEnum = AppConfigService.getInstance().getReleaseType();
    const responsesFactoryPattern: IAppReleaseTypeResponsesFactoryPattern<number> = {
      [AppConfigReleaseTypeEnum.BUG_FIXES](): number {
        return DiscordMessageConfigService.getInstance().getMessageCommandReleaseNotesBugFixesImageColor();
      },
      [AppConfigReleaseTypeEnum.FEATURES](): number {
        return DiscordMessageConfigService.getInstance().getMessageCommandReleaseNotesFeaturesImageColor();
      },
      [AppConfigReleaseTypeEnum.MIXED](): number {
        return DiscordMessageConfigService.getInstance().getMessageCommandReleaseNotesMixedImageColor();
      },
      [AppConfigReleaseTypeEnum.PERFORMANCE_IMPROVEMENTS](): number {
        return DiscordMessageConfigService.getInstance().getMessageCommandReleaseNotesPerformanceImprovementsImageColor();
      },
      [AppConfigReleaseTypeEnum.UNKNOWN](): number {
        return DiscordMessageConfigService.getInstance().getMessageCommandReleaseNotesUnknownImageColor();
      },
    };

    return responsesFactoryPattern[releaseType]();
  }

  private _getMessageEmbedTimestamp(): Date {
    return moment().toDate();
  }

  private _getMessageEmbedTitle(): string {
    const appVersion: string = AppConfigService.getInstance().getVersion();

    return `**${appVersion}** release notes - ${AppConfigQueryService.getInstance().getReleaseDateHumanized()}`;
  }

  private _getMessageDescription(): string {
    const appReleaseNotes: string = AppConfigService.getInstance().getReleaseNotes();

    return `${appReleaseNotes}\n\nCheckout all the [release notes](https://github.com/Sonia-corporation/sonia-discord/blob/master/CHANGELOG.md).`;
  }
}
