import { DiscordMessageCommandEnum } from './discord-message-command.enum';
import { getEnumLength } from '../../../../../functions/checks/get-enum-length';

describe(`DiscordMessageCommandEnum`, (): void => {
  it(`should have a 15 members`, (): void => {
    expect.assertions(1);

    expect(getEnumLength(DiscordMessageCommandEnum)).toStrictEqual(15);
  });

  it(`should have a member "VERSION"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.VERSION).toStrictEqual(`version`);
  });

  it(`should have a member "V"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.V).toStrictEqual(`v`);
  });

  it(`should have a member "ERROR"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.ERROR).toStrictEqual(`error`);
  });

  it(`should have a member "BUG"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.BUG).toStrictEqual(`bug`);
  });

  it(`should have a member "HELP"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.HELP).toStrictEqual(`help`);
  });

  it(`should have a member "H"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.H).toStrictEqual(`h`);
  });

  it(`should have a member "COOKIE"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.COOKIE).toStrictEqual(`cookie`);
  });

  it(`should have a member "COOKIES"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.COOKIES).toStrictEqual(`cookies`);
  });

  it(`should have a member "C"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.C).toStrictEqual(`c`);
  });

  it(`should have a member "LUNCH"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.LUNCH).toStrictEqual(`lunch`);
  });

  it(`should have a member "L"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.L).toStrictEqual(`l`);
  });

  it(`should have a member "RELEASE_NOTES"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.RELEASE_NOTES).toStrictEqual(`release-notes`);
  });

  it(`should have a member "R"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.R).toStrictEqual(`r`);
  });

  it(`should have a member "FEATURE"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.FEATURE).toStrictEqual(`feature`);
  });

  it(`should have a member "F"`, (): void => {
    expect.assertions(1);

    expect(DiscordMessageCommandEnum.F).toStrictEqual(`f`);
  });
});
