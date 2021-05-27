import { AbstractService } from '../../../../../classes/services/abstract.service';
import { ServiceNameEnum } from '../../../../../enums/service-name.enum';
import { IDiscordGuildConfig } from '../../../interfaces/discord-guild-config';
import _ from 'lodash';

export class DiscordGuildConfigCoreService extends AbstractService implements IDiscordGuildConfig {
  private static _instance: DiscordGuildConfigCoreService;

  public static getInstance(): DiscordGuildConfigCoreService {
    if (_.isNil(DiscordGuildConfigCoreService._instance)) {
      DiscordGuildConfigCoreService._instance = new DiscordGuildConfigCoreService();
    }

    return DiscordGuildConfigCoreService._instance;
  }

  public shouldSendCookiesOnCreate = true;
  public shouldSendNoonMessage = true;
  public shouldWelcomeNewMembers = true;
  public soniaGuildId = `689833865279307782`;
  public soniaPermanentGuildInviteUrl = `https://discord.gg/PW4JSkv`;

  public constructor() {
    super(ServiceNameEnum.DISCORD_GUILD_CONFIG_CORE_SERVICE);
  }
}
