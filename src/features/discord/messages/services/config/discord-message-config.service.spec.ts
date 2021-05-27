import { DiscordMessageConfigCoreService } from './discord-message-config-core.service';
import { DiscordMessageConfigService } from './discord-message-config.service';
import { ColorEnum } from '../../../../../enums/color.enum';
import { IconEnum } from '../../../../../enums/icon.enum';
import { ServiceNameEnum } from '../../../../../enums/service-name.enum';
import { CoreEventService } from '../../../../core/services/core-event.service';
import { IDiscordMessageCommandCliErrorConfig } from '../../../interfaces/discord-message-command-cli-error-config';
import { IDiscordMessageCommandConfig } from '../../../interfaces/discord-message-command-config';
import { IDiscordMessageCommandCookieConfig } from '../../../interfaces/discord-message-command-cookie-config';
import { IDiscordMessageCommandErrorConfig } from '../../../interfaces/discord-message-command-error-config';
import { IDiscordMessageCommandHelpConfig } from '../../../interfaces/discord-message-command-help-config';
import { IDiscordMessageCommandLunchConfig } from '../../../interfaces/discord-message-command-lunch-config';
import { IDiscordMessageCommandReleaseNotesConfig } from '../../../interfaces/discord-message-command-release-notes-config';
import { IDiscordMessageCommandVersionConfig } from '../../../interfaces/discord-message-command-version-config';
import { IDiscordMessageConfig } from '../../../interfaces/discord-message-config';
import { IDiscordMessageErrorConfig } from '../../../interfaces/discord-message-error-config';
import { IDiscordMessageWarningConfig } from '../../../interfaces/discord-message-warning-config';

describe(`DiscordMessageConfigService`, (): void => {
  let service: DiscordMessageConfigService;
  let discordMessageConfigCoreService: DiscordMessageConfigCoreService;
  let coreEventService: CoreEventService;

  beforeEach((): void => {
    discordMessageConfigCoreService = DiscordMessageConfigCoreService.getInstance();
    coreEventService = CoreEventService.getInstance();
  });

  describe(`getInstance()`, (): void => {
    it(`should create a DiscordMessageConfig service`, (): void => {
      expect.assertions(1);

      service = DiscordMessageConfigService.getInstance();

      expect(service).toStrictEqual(expect.any(DiscordMessageConfigService));
    });

    it(`should return the created DiscordMessageConfig service`, (): void => {
      expect.assertions(1);

      const result = DiscordMessageConfigService.getInstance();

      expect(result).toStrictEqual(service);
    });
  });

  describe(`constructor()`, (): void => {
    let coreEventServiceNotifyServiceCreatedSpy: jest.SpyInstance;

    beforeEach((): void => {
      coreEventServiceNotifyServiceCreatedSpy = jest
        .spyOn(coreEventService, `notifyServiceCreated`)
        .mockImplementation();
    });

    it(`should notify the DiscordMessageConfig service creation`, (): void => {
      expect.assertions(2);

      service = new DiscordMessageConfigService();

      expect(coreEventServiceNotifyServiceCreatedSpy).toHaveBeenCalledTimes(1);
      expect(coreEventServiceNotifyServiceCreatedSpy).toHaveBeenCalledWith(
        ServiceNameEnum.DISCORD_MESSAGE_CONFIG_SERVICE
      );
    });
  });

  describe(`getConfig()`, (): void => {
    beforeEach((): void => {
      service = new DiscordMessageConfigService();
      discordMessageConfigCoreService.command = {
        cliError: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        cookie: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        error: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        help: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        lunch: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        prefix: `dummy-prefix`,
        releaseNotes: {
          bugFixes: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          features: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          mixed: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          performanceImprovements: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          unknown: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
        },
        version: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
      };
      discordMessageConfigCoreService.error = {
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      };
      discordMessageConfigCoreService.warning = {
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      };
    });

    it(`should return the Discord message config`, (): void => {
      expect.assertions(1);

      const result = service.getConfig();

      expect(result).toStrictEqual({
        command: {
          cliError: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          cookie: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          error: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          help: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          lunch: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          prefix: `dummy-prefix`,
          releaseNotes: {
            bugFixes: {
              imageColor: ColorEnum.CANDY,
              imageUrl: IconEnum.WARNING_SHIELD,
            },
            features: {
              imageColor: ColorEnum.CANDY,
              imageUrl: IconEnum.WARNING_SHIELD,
            },
            mixed: {
              imageColor: ColorEnum.CANDY,
              imageUrl: IconEnum.WARNING_SHIELD,
            },
            performanceImprovements: {
              imageColor: ColorEnum.CANDY,
              imageUrl: IconEnum.WARNING_SHIELD,
            },
            unknown: {
              imageColor: ColorEnum.CANDY,
              imageUrl: IconEnum.WARNING_SHIELD,
            },
          },
          version: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
        },
        error: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        warning: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
      } as IDiscordMessageConfig);
    });
  });

  describe(`getMessageCommand()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command = {
        cliError: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        cookie: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        error: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        help: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        lunch: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        prefix: `dummy-prefix`,
        releaseNotes: {
          bugFixes: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          features: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          mixed: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          performanceImprovements: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          unknown: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
        },
        version: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
      };
    });

    it(`should return the Discord message config command`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommand();

      expect(result).toStrictEqual({
        cliError: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        cookie: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        error: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        help: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        lunch: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        prefix: `dummy-prefix`,
        releaseNotes: {
          bugFixes: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          features: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          mixed: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          performanceImprovements: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
          unknown: {
            imageColor: ColorEnum.CANDY,
            imageUrl: IconEnum.WARNING_SHIELD,
          },
        },
        version: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
      } as IDiscordMessageCommandConfig);
    });
  });

  describe(`getMessageCommandCliError()`, (): void => {
    beforeEach((): void => {
      service = new DiscordMessageConfigService();
      discordMessageConfigCoreService.command.cliError = {
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      };
    });

    it(`should return the Discord message config command CLI error`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandCliError();

      expect(result).toStrictEqual({
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      } as IDiscordMessageCommandCliErrorConfig);
    });
  });

  describe(`getMessageCommandCliErrorImageColor()`, (): void => {
    beforeEach((): void => {
      service = new DiscordMessageConfigService();
      discordMessageConfigCoreService.command.cliError.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config command CLI error image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandCliErrorImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageCommandCliErrorImageUrl()`, (): void => {
    beforeEach((): void => {
      service = new DiscordMessageConfigService();
      discordMessageConfigCoreService.command.cliError.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config command CLI error image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandCliErrorImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageCommandCookie()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.cookie = {
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      };
    });

    it(`should return the Discord message config command cookie`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandCookie();

      expect(result).toStrictEqual({
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      } as IDiscordMessageCommandCookieConfig);
    });
  });

  describe(`getMessageCommandCookieImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.cookie.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config command cookie image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandCookieImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageCommandCookieImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.cookie.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config command cookie image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandCookieImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageCommandError()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.error = {
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      };
    });

    it(`should return the Discord message config command error`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandError();

      expect(result).toStrictEqual({
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      } as IDiscordMessageCommandErrorConfig);
    });
  });

  describe(`getMessageCommandErrorImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.error.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config command error image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandErrorImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageCommandErrorImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.error.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config command error image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandErrorImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageCommandHelp()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.help = {
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      };
    });

    it(`should return the Discord message config command help`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandHelp();

      expect(result).toStrictEqual({
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      } as IDiscordMessageCommandHelpConfig);
    });
  });

  describe(`getMessageCommandHelpImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.help.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config command help image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandHelpImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageCommandHelpImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.help.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config command help image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandHelpImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageCommandLunch()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.lunch = {
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      };
    });

    it(`should return the Discord message config command lunch`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandLunch();

      expect(result).toStrictEqual({
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      } as IDiscordMessageCommandLunchConfig);
    });
  });

  describe(`getMessageCommandLunchImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.lunch.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config command lunch image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandLunchImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageCommandLunchImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.lunch.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config command lunch image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandLunchImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageCommandPrefix()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.prefix = `dummy-prefix`;
    });

    it(`should return the Discord message config command prefix`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandPrefix();

      expect(result).toStrictEqual(`dummy-prefix`);
    });
  });

  describe(`getMessageCommandReleaseNotes()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.releaseNotes = {
        bugFixes: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        features: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        mixed: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        performanceImprovements: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        unknown: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
      };
    });

    it(`should return the Discord message config command release notes`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandReleaseNotes();

      expect(result).toStrictEqual({
        bugFixes: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        features: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        mixed: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        performanceImprovements: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
        unknown: {
          imageColor: ColorEnum.CANDY,
          imageUrl: IconEnum.WARNING_SHIELD,
        },
      } as IDiscordMessageCommandReleaseNotesConfig);
    });
  });

  describe(`getMessageCommandReleaseNotesBugFixesImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.releaseNotes.bugFixes.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config command release notes bug fixes image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandReleaseNotesBugFixesImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageCommandReleaseNotesBugFixesImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.releaseNotes.bugFixes.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config command release notes bug fixes image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandReleaseNotesBugFixesImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageCommandReleaseNotesFeaturesImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.releaseNotes.features.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config command release notes features image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandReleaseNotesFeaturesImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageCommandReleaseNotesFeaturesImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.releaseNotes.features.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config command release notes features image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandReleaseNotesFeaturesImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageCommandReleaseNotesMixedImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.releaseNotes.mixed.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config command release notes mixed image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandReleaseNotesMixedImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageCommandReleaseNotesMixedImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.releaseNotes.mixed.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config command release notes mixed image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandReleaseNotesMixedImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageCommandReleaseNotesPerformanceImprovementsImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.releaseNotes.performanceImprovements.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config command release notes performance improvements image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandReleaseNotesPerformanceImprovementsImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageCommandReleaseNotesPerformanceImprovementsImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.releaseNotes.performanceImprovements.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config command release notes performance improvements image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandReleaseNotesPerformanceImprovementsImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageCommandReleaseNotesUnknownImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.releaseNotes.unknown.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config command release notes unknown image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandReleaseNotesUnknownImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageCommandReleaseNotesUnknownImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.releaseNotes.unknown.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config command release notes unknown image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandReleaseNotesUnknownImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageCommandVersion()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.version = {
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      };
    });

    it(`should return the Discord message config command version`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandVersion();

      expect(result).toStrictEqual({
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      } as IDiscordMessageCommandVersionConfig);
    });
  });

  describe(`getMessageCommandVersionImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.version.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config command version image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandVersionImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageCommandVersionImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.command.version.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config command version image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageCommandVersionImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageError()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.error = {
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      };
    });

    it(`should return the Discord message config error`, (): void => {
      expect.assertions(1);

      const result = service.getMessageError();

      expect(result).toStrictEqual({
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      } as IDiscordMessageErrorConfig);
    });
  });

  describe(`getMessageErrorImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.error.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config error image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageErrorImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageErrorImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.error.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config error image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageErrorImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });

  describe(`getMessageWarning()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.warning = {
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      };
    });

    it(`should return the Discord message config warning`, (): void => {
      expect.assertions(1);

      const result = service.getMessageWarning();

      expect(result).toStrictEqual({
        imageColor: ColorEnum.CANDY,
        imageUrl: IconEnum.WARNING_SHIELD,
      } as IDiscordMessageWarningConfig);
    });
  });

  describe(`getMessageWarningImageColor()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.warning.imageColor = ColorEnum.CANDY;
    });

    it(`should return the Discord message config warning image color`, (): void => {
      expect.assertions(1);

      const result = service.getMessageWarningImageColor();

      expect(result).toStrictEqual(ColorEnum.CANDY);
    });
  });

  describe(`getMessageWarningImageUrl()`, (): void => {
    beforeEach((): void => {
      service = DiscordMessageConfigService.getInstance();
      discordMessageConfigCoreService.warning.imageUrl = IconEnum.WARNING_SHIELD;
    });

    it(`should return the Discord message config warning image url`, (): void => {
      expect.assertions(1);

      const result = service.getMessageWarningImageUrl();

      expect(result).toStrictEqual(IconEnum.WARNING_SHIELD);
    });
  });
});
