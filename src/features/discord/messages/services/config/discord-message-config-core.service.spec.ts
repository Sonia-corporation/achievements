import { DiscordMessageConfigCoreService } from './discord-message-config-core.service';
import { ServiceNameEnum } from '../../../../../enums/service-name.enum';
import { CoreEventService } from '../../../../core/services/core-event.service';

describe(`DiscordMessageConfigCoreService`, (): void => {
  let service: DiscordMessageConfigCoreService;
  let coreEventService: CoreEventService;

  beforeEach((): void => {
    coreEventService = CoreEventService.getInstance();
  });

  describe(`getInstance()`, (): void => {
    it(`should create a DiscordMessageConfigCore service`, (): void => {
      expect.assertions(1);

      service = DiscordMessageConfigCoreService.getInstance();

      expect(service).toStrictEqual(expect.any(DiscordMessageConfigCoreService));
    });

    it(`should return the created DiscordMessageConfigCore service`, (): void => {
      expect.assertions(1);

      const result = DiscordMessageConfigCoreService.getInstance();

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

    it(`should notify the DiscordMessageConfigCore service creation`, (): void => {
      expect.assertions(2);

      service = new DiscordMessageConfigCoreService();

      expect(coreEventServiceNotifyServiceCreatedSpy).toHaveBeenCalledTimes(1);
      expect(coreEventServiceNotifyServiceCreatedSpy).toHaveBeenCalledWith(
        ServiceNameEnum.DISCORD_MESSAGE_CONFIG_CORE_SERVICE
      );
    });
  });

  it(`should have a specific color for the image of the CLI error command`, (): void => {
    expect.assertions(1);

    service = new DiscordMessageConfigCoreService();

    expect(service.command.cliError.imageColor).toStrictEqual(15562905);
  });

  it(`should have a specific url for the image of the CLI error command`, (): void => {
    expect.assertions(1);

    service = new DiscordMessageConfigCoreService();

    expect(service.command.cliError.imageUrl).toStrictEqual(`https://i.ibb.co/cLM30Xb/icons8-cancel-512.png`);
  });

  it(`should have a specific color for the image of the cookie command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.cookie.imageColor).toStrictEqual(16376750);
  });

  it(`should have a specific url for the image of the cookie command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.cookie.imageUrl).toStrictEqual(`https://i.ibb.co/RTp4YPx/icons8-cookies-512.png`);
  });

  it(`should have a specific color for the image of the error command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.error.imageColor).toStrictEqual(15562905);
  });

  it(`should have a specific url for the image of the error command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.error.imageUrl).toStrictEqual(`https://i.ibb.co/5jZmzSB/icons8-error-512.png`);
  });

  it(`should have a specific color for the image of the help command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.help.imageColor).toStrictEqual(7522991);
  });

  it(`should have a specific url for the image of the help command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.help.imageUrl).toStrictEqual(`https://i.ibb.co/vLSnVk6/icons8-information-512.png`);
  });

  it(`should have a specific color for the image of the lunch command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.lunch.imageColor).toStrictEqual(14082034);
  });

  it(`should have a specific url for the image of the lunch command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.lunch.imageUrl).toStrictEqual(`https://i.ibb.co/vXwNzWD/icons8-restaurant-512.png`);
  });

  it(`should have a "!" prefix for the commands`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.prefix).toStrictEqual(`!`);
  });

  it(`should have a specific color for the image of the release notes bug fixes command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.releaseNotes.bugFixes.imageColor).toStrictEqual(9146008);
  });

  it(`should have a specific url for the image of the release notes bug fixes command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.releaseNotes.bugFixes.imageUrl).toStrictEqual(
      `https://i.ibb.co/CmxGZG1/icons8-deadbug-512.png`
    );
  });

  it(`should have a specific color for the image of the release notes features command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.releaseNotes.features.imageColor).toStrictEqual(15562905);
  });

  it(`should have a specific url for the image of the release notes features command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.releaseNotes.features.imageUrl).toStrictEqual(`https://i.ibb.co/YjzVm0c/icons8-new-512.png`);
  });

  it(`should have a specific color for the image of the release notes mixed command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.releaseNotes.mixed.imageColor).toStrictEqual(15718590);
  });

  it(`should have a specific url for the image of the release notes mixed command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.releaseNotes.mixed.imageUrl).toStrictEqual(
      `https://i.ibb.co/9p3Q17S/icons8-new-product-512.png`
    );
  });

  it(`should have a specific color for the image of the release notes performance improvements command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.releaseNotes.performanceImprovements.imageColor).toStrictEqual(15562905);
  });

  it(`should have a specific url for the image of the release notes performance improvements command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.releaseNotes.performanceImprovements.imageUrl).toStrictEqual(
      `https://i.ibb.co/JkmQvS1/icons8-the-flash-sign-512.png`
    );
  });

  it(`should have a specific color for the image of the release notes unknown command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.releaseNotes.unknown.imageColor).toStrictEqual(15718590);
  });

  it(`should have a specific url for the image of the release notes unknown command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.releaseNotes.unknown.imageUrl).toStrictEqual(
      `https://i.ibb.co/9p3Q17S/icons8-new-product-512.png`
    );
  });

  it(`should have a specific color for the image of the version command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.version.imageColor).toStrictEqual(11912416);
  });

  it(`should have a specific url for the image of the version command`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.command.version.imageUrl).toStrictEqual(
      `https://i.ibb.co/ph17BqP/icons8-artificial-intelligence-512.png`
    );
  });

  it(`should have a specific color for the image of the error`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.error.imageColor).toStrictEqual(15562905);
  });

  it(`should have a specific url for the image of the error`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.error.imageUrl).toStrictEqual(`https://i.ibb.co/r7PHJS1/icons8-bug-512.png`);
  });

  it(`should have a specific color for the image of the warning`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.warning.imageColor).toStrictEqual(15562905);
  });

  it(`should have a specific url for the image of the warning`, (): void => {
    expect.assertions(1);

    service = DiscordMessageConfigCoreService.getInstance();

    expect(service.warning.imageUrl).toStrictEqual(`https://i.ibb.co/41ccwXn/icons8-warning-shield-512.png`);
  });
});
