import { ServiceNameEnum } from '../../../../../../../../enums/service-name.enum';
import { wrapInBold } from '../../../../../../../../functions/formatters/wrap-in-bold';
import { IDiscordCommandFlagError } from '../../../../../interfaces/commands/flags/discord-command-flag-error';
import { IDiscordMessageResponse } from '../../../../../interfaces/discord-message-response';
import { IDiscordCommandFlagsErrors } from '../../../../../types/commands/flags/discord-command-flags-errors';
import { DiscordMessageCommandCliErrorService } from '../../../discord-message-command-cli-error.service';
import { DiscordMessageCommandFeatureErrorCoreService } from '../discord-message-command-feature-error-core.service';
import { EmbedFieldData, MessageEmbedOptions } from 'discord.js';
import _ from 'lodash';

const ONE_FLAG_ERROR = 1;

export class DiscordMessageCommandFeatureWrongFlagsErrorService extends DiscordMessageCommandFeatureErrorCoreService {
  private static _instance: DiscordMessageCommandFeatureWrongFlagsErrorService;

  public static getInstance(): DiscordMessageCommandFeatureWrongFlagsErrorService {
    if (_.isNil(DiscordMessageCommandFeatureWrongFlagsErrorService._instance)) {
      DiscordMessageCommandFeatureWrongFlagsErrorService._instance = new DiscordMessageCommandFeatureWrongFlagsErrorService();
    }

    return DiscordMessageCommandFeatureWrongFlagsErrorService._instance;
  }

  public constructor() {
    super(ServiceNameEnum.DISCORD_MESSAGE_COMMAND_FEATURE_WRONG_FLAGS_ERROR_SERVICE);
  }

  public getMessageResponse(flagsErrors: Readonly<IDiscordCommandFlagsErrors>): Promise<IDiscordMessageResponse> {
    return DiscordMessageCommandCliErrorService.getInstance()
      .getCliErrorMessageResponse()
      .then(
        (cliErrorMessageResponse: Readonly<IDiscordMessageResponse>): Promise<IDiscordMessageResponse> =>
          Promise.resolve(
            _.merge(cliErrorMessageResponse, {
              options: {
                embed: this._getMessageEmbed(flagsErrors),
                split: false,
              },
              response: ``,
            } as IDiscordMessageResponse)
          )
      );
  }

  private _getMessageEmbed(flagsErrors: Readonly<IDiscordCommandFlagsErrors>): MessageEmbedOptions {
    return {
      description: this._getMessageEmbedDescription(flagsErrors),
      fields: this._getMessageEmbedFields(flagsErrors),
      footer: this._getMessageEmbedFooter(),
      title: this._getMessageEmbedTitle(),
    };
  }

  private _getMessageEmbedDescription(flagsErrors: Readonly<IDiscordCommandFlagsErrors>): string {
    const flagsErrorsCount: number = this._getFlagsErrorsCount(flagsErrors);

    return `${wrapInBold(flagsErrorsCount)} error${_.gt(flagsErrorsCount, ONE_FLAG_ERROR) ? `s` : ``} found.`;
  }

  private _getMessageEmbedFields(flagsErrors: Readonly<IDiscordCommandFlagsErrors>): EmbedFieldData[] {
    return _.map(
      flagsErrors,
      ({ name, description }: Readonly<IDiscordCommandFlagError>): EmbedFieldData => {
        return {
          inline: false,
          name,
          value: description,
        };
      }
    );
  }

  private _getFlagsErrorsCount(flagsErrors: Readonly<IDiscordCommandFlagsErrors>): number {
    return _.size(flagsErrors);
  }
}
