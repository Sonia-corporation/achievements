import { DiscordMessageConfigValueNameEnum } from './discord-message-config-value-name.enum';
import { getEnumLength } from '../../../../functions/checks/get-enum-length';

describe(`DiscordMessageConfigValueNameEnum`, (): void => {
  it(`should have a 31 members`, (): void => {
    expect.assertions(1);

    expect(getEnumLength(DiscordMessageConfigValueNameEnum)).toStrictEqual(31);
  });

  it(`should have a member "COMMAND_CLI_ERROR_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_CLI_ERROR_IMAGE_COLOR).toStrictEqual(
      `message command CLI error image color`
    );
  });

  it(`should have a member "COMMAND_CLI_ERROR_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_CLI_ERROR_IMAGE_URL).toStrictEqual(
      `message command CLI error image url`
    );
  });

  it(`should have a member "COMMAND_COOKIE_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_COOKIE_IMAGE_COLOR).toStrictEqual(
      `message command cookie image color`
    );
  });

  it(`should have a member "COMMAND_COOKIE_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_COOKIE_IMAGE_URL).toStrictEqual(
      `message command cookie image url`
    );
  });

  it(`should have a member "COMMAND_ERROR_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_ERROR_IMAGE_COLOR).toStrictEqual(
      `message command error image color`
    );
  });

  it(`should have a member "COMMAND_ERROR_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_ERROR_IMAGE_URL).toStrictEqual(`message command error image url`);
  });

  it(`should have a member "COMMAND_FEATURE_NOON_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_FEATURE_NOON_COLOR).toStrictEqual(
      `message command feature noon color`
    );
  });

  it(`should have a member "COMMAND_FEATURE_NOON_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_FEATURE_NOON_IMAGE_URL).toStrictEqual(
      `message command feature noon image url`
    );
  });

  it(`should have a member "COMMAND_FEATURE_RELEASE_NOTES_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_FEATURE_RELEASE_NOTES_COLOR).toStrictEqual(
      `message command feature release notes color`
    );
  });

  it(`should have a member "COMMAND_FEATURE_RELEASE_NOTES_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_FEATURE_RELEASE_NOTES_IMAGE_URL).toStrictEqual(
      `message command feature release notes image url`
    );
  });

  it(`should have a member "COMMAND_HELP_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_HELP_IMAGE_COLOR).toStrictEqual(
      `message command help image color`
    );
  });

  it(`should have a member "COMMAND_HELP_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_HELP_IMAGE_URL).toStrictEqual(`message command help image url`);
  });

  it(`should have a member "COMMAND_LUNCH_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_LUNCH_IMAGE_COLOR).toStrictEqual(
      `message command lunch image color`
    );
  });

  it(`should have a member "COMMAND_LUNCH_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_LUNCH_IMAGE_URL).toStrictEqual(`message command lunch image url`);
  });

  it(`should have a member "COMMAND_PREFIX"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_PREFIX).toStrictEqual(`message command prefix`);
  });

  it(`should have a member "COMMAND_RELEASE_NOTES_BUG_FIXES_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_RELEASE_NOTES_BUG_FIXES_IMAGE_COLOR).toStrictEqual(
      `message command release notes bug fixes image color`
    );
  });

  it(`should have a member "COMMAND_RELEASE_NOTES_BUG_FIXES_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_RELEASE_NOTES_BUG_FIXES_IMAGE_URL).toStrictEqual(
      `message command release notes bug fixes image url`
    );
  });

  it(`should have a member "COMMAND_RELEASE_NOTES_FEATURES_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_RELEASE_NOTES_FEATURES_IMAGE_COLOR).toStrictEqual(
      `message command release notes features image color`
    );
  });

  it(`should have a member "COMMAND_RELEASE_NOTES_FEATURES_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_RELEASE_NOTES_FEATURES_IMAGE_URL).toStrictEqual(
      `message command release notes features image url`
    );
  });

  it(`should have a member "COMMAND_RELEASE_NOTES_MIXED_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_RELEASE_NOTES_MIXED_IMAGE_COLOR).toStrictEqual(
      `message command release notes mixed image color`
    );
  });

  it(`should have a member "COMMAND_RELEASE_NOTES_MIXED_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_RELEASE_NOTES_MIXED_IMAGE_URL).toStrictEqual(
      `message command release notes mixed image url`
    );
  });

  it(`should have a member "COMMAND_RELEASE_NOTES_PERFORMANCE_IMPROVEMENTS_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_RELEASE_NOTES_PERFORMANCE_IMPROVEMENTS_IMAGE_COLOR).toStrictEqual(
      `message command release notes performance improvements image color`
    );
  });

  it(`should have a member "COMMAND_RELEASE_NOTES_PERFORMANCE_IMPROVEMENTS_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_RELEASE_NOTES_PERFORMANCE_IMPROVEMENTS_IMAGE_URL).toStrictEqual(
      `message command release notes performance improvements image url`
    );
  });

  it(`should have a member "COMMAND_RELEASE_NOTES_UNKNOWN_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_RELEASE_NOTES_UNKNOWN_IMAGE_COLOR).toStrictEqual(
      `message command release notes unknown image color`
    );
  });

  it(`should have a member "COMMAND_RELEASE_NOTES_UNKNOWN_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_RELEASE_NOTES_UNKNOWN_IMAGE_URL).toStrictEqual(
      `message command release notes unknown image url`
    );
  });

  it(`should have a member "COMMAND_VERSION_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_VERSION_IMAGE_COLOR).toStrictEqual(
      `message command version image color`
    );
  });

  it(`should have a member "COMMAND_VERSION_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.COMMAND_VERSION_IMAGE_URL).toStrictEqual(
      `message command version image url`
    );
  });

  it(`should have a member "ERROR_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.ERROR_IMAGE_COLOR).toStrictEqual(`message error image color`);
  });

  it(`should have a member "ERROR_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.ERROR_IMAGE_URL).toStrictEqual(`message error image url`);
  });

  it(`should have a member "WARNING_IMAGE_COLOR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.WARNING_IMAGE_COLOR).toStrictEqual(`message warning image color`);
  });

  it(`should have a member "WARNING_IMAGE_URL"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageConfigValueNameEnum.WARNING_IMAGE_URL).toStrictEqual(`message warning image url`);
  });
});
