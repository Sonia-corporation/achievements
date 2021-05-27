import { DiscordMessageCommandCookieService } from './cookie/services/discord-message-command-cookie.service';
import { DiscordMessageCommandErrorService } from './error/discord-message-command-error.service';
import { DiscordMessageCommandFeatureService } from './feature/discord-message-command-feature.service';
import { DiscordMessageCommandHelpService } from './help/discord-message-command-help.service';
import { DiscordMessageCommandLunchService } from './lunch/services/discord-message-command-lunch.service';
import { DiscordMessageCommandReleaseNotesService } from './release-notes/discord-message-command-release-notes.service';
import { DiscordMessageCommandVersionService } from './version/discord-message-command-version.service';
import { AbstractService } from '../../../../../classes/services/abstract.service';
import { ServiceNameEnum } from '../../../../../enums/service-name.enum';
import { IDiscordMessageResponse } from '../../interfaces/discord-message-response';
import { IAnyDiscordMessage } from '../../types/any-discord-message';
import { DiscordMessageContentService } from '../helpers/discord-message-content.service';
import _ from 'lodash';

export class DiscordMessageCommandService extends AbstractService {
  private static _instance: DiscordMessageCommandService;

  public static getInstance(): DiscordMessageCommandService {
    if (_.isNil(DiscordMessageCommandService._instance)) {
      DiscordMessageCommandService._instance = new DiscordMessageCommandService();
    }

    return DiscordMessageCommandService._instance;
  }

  public constructor() {
    super(ServiceNameEnum.DISCORD_MESSAGE_COMMAND_SERVICE);
  }

  public hasCommand(message: Readonly<string>): boolean {
    if (DiscordMessageCommandVersionService.getInstance().hasCommand(message)) {
      return true;
    } else if (DiscordMessageCommandErrorService.getInstance().hasCommand(message)) {
      return true;
    } else if (DiscordMessageCommandHelpService.getInstance().hasCommand(message)) {
      return true;
    } else if (DiscordMessageCommandCookieService.getInstance().hasCommand(message)) {
      return true;
    } else if (DiscordMessageCommandLunchService.getInstance().hasCommand(message)) {
      return true;
    } else if (DiscordMessageCommandReleaseNotesService.getInstance().hasCommand(message)) {
      return true;
    } else if (DiscordMessageCommandFeatureService.getInstance().hasCommand(message)) {
      return true;
    }

    return false;
  }

  public handleVersionCommand(anyDiscordMessage: Readonly<IAnyDiscordMessage>): Promise<IDiscordMessageResponse> {
    return DiscordMessageCommandVersionService.getInstance().handleResponse(anyDiscordMessage);
  }

  public handleErrorCommand(anyDiscordMessage: Readonly<IAnyDiscordMessage>): Promise<IDiscordMessageResponse> {
    return DiscordMessageCommandErrorService.getInstance().handleResponse(anyDiscordMessage);
  }

  public handleHelpCommand(anyDiscordMessage: Readonly<IAnyDiscordMessage>): Promise<IDiscordMessageResponse> {
    return DiscordMessageCommandHelpService.getInstance().handleResponse(anyDiscordMessage);
  }

  public handleCookieCommand(anyDiscordMessage: Readonly<IAnyDiscordMessage>): Promise<IDiscordMessageResponse> {
    return DiscordMessageCommandCookieService.getInstance().handleResponse(anyDiscordMessage);
  }

  public handleLunchCommand(anyDiscordMessage: Readonly<IAnyDiscordMessage>): Promise<IDiscordMessageResponse> {
    return DiscordMessageCommandLunchService.getInstance().handleResponse(anyDiscordMessage);
  }

  public handleReleaseNotesCommand(anyDiscordMessage: Readonly<IAnyDiscordMessage>): Promise<IDiscordMessageResponse> {
    return DiscordMessageCommandReleaseNotesService.getInstance().handleResponse(anyDiscordMessage);
  }

  public handleFeatureCommand(
    anyDiscordMessage: Readonly<IAnyDiscordMessage>
  ): Promise<IDiscordMessageResponse | IDiscordMessageResponse[]> {
    return DiscordMessageCommandFeatureService.getInstance().handleResponse(anyDiscordMessage);
  }

  public handleCommands(
    anyDiscordMessage: Readonly<IAnyDiscordMessage>
  ): Promise<IDiscordMessageResponse | IDiscordMessageResponse[]> {
    if (DiscordMessageContentService.getInstance().hasContent(anyDiscordMessage.content)) {
      if (DiscordMessageCommandFeatureService.getInstance().hasCommand(anyDiscordMessage.content)) {
        return this.handleFeatureCommand(anyDiscordMessage);
      } else if (DiscordMessageCommandVersionService.getInstance().hasCommand(anyDiscordMessage.content)) {
        return this.handleVersionCommand(anyDiscordMessage);
      } else if (DiscordMessageCommandErrorService.getInstance().hasCommand(anyDiscordMessage.content)) {
        return this.handleErrorCommand(anyDiscordMessage);
      } else if (DiscordMessageCommandHelpService.getInstance().hasCommand(anyDiscordMessage.content)) {
        return this.handleHelpCommand(anyDiscordMessage);
      } else if (DiscordMessageCommandCookieService.getInstance().hasCommand(anyDiscordMessage.content)) {
        return this.handleCookieCommand(anyDiscordMessage);
      } else if (DiscordMessageCommandLunchService.getInstance().hasCommand(anyDiscordMessage.content)) {
        return this.handleLunchCommand(anyDiscordMessage);
      } else if (DiscordMessageCommandReleaseNotesService.getInstance().hasCommand(anyDiscordMessage.content)) {
        return this.handleReleaseNotesCommand(anyDiscordMessage);
      }
    }

    return Promise.reject(new Error(`Could not handle the command`));
  }
}
