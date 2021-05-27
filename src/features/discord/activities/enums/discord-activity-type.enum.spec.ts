import { DiscordActivityTypeEnum } from './discord-activity-type.enum';
import { getEnumLength } from '../../../../functions/checks/get-enum-length';

describe(`DiscordActivityTypeEnum`, (): void => {
  it(`should have a 5 members`, (): void => {
    expect.assertions(1);

    expect(getEnumLength(DiscordActivityTypeEnum)).toStrictEqual(5);
  });

  it(`should have a member "CUSTOM_STATUS"`, (): void => {
    expect.assertions(1);

    expect(DiscordActivityTypeEnum.CUSTOM_STATUS).toStrictEqual(`CUSTOM_STATUS`);
  });

  it(`should have a member "LISTENING"`, (): void => {
    expect.assertions(1);

    expect(DiscordActivityTypeEnum.LISTENING).toStrictEqual(`LISTENING`);
  });

  it(`should have a member "PLAYING"`, (): void => {
    expect.assertions(1);

    expect(DiscordActivityTypeEnum.PLAYING).toStrictEqual(`PLAYING`);
  });

  it(`should have a member "STREAMING"`, (): void => {
    expect.assertions(1);

    expect(DiscordActivityTypeEnum.STREAMING).toStrictEqual(`STREAMING`);
  });

  it(`should have a member "WATCHING"`, (): void => {
    expect.assertions(1);

    expect(DiscordActivityTypeEnum.WATCHING).toStrictEqual(`WATCHING`);
  });
});
