import { isDiscordGuildChannel } from './is-discord-guild-channel';
import { GuildChannel } from 'discord.js';

describe(`isDiscordGuildChannel()`, (): void => {
  let channel: unknown;

  describe(`when the given value is undefined`, (): void => {
    beforeEach((): void => {
      channel = undefined;
    });

    it(`should return false`, (): void => {
      expect.assertions(1);

      const result = isDiscordGuildChannel(channel);

      expect(result).toStrictEqual(false);
    });
  });

  describe(`when the given value is null`, (): void => {
    beforeEach((): void => {
      channel = null;
    });

    it(`should return false`, (): void => {
      expect.assertions(1);

      const result = isDiscordGuildChannel(channel);

      expect(result).toStrictEqual(false);
    });
  });

  describe(`when the given value is an empty object`, (): void => {
    beforeEach((): void => {
      channel = {};
    });

    it(`should return false`, (): void => {
      expect.assertions(1);

      const result = isDiscordGuildChannel(channel);

      expect(result).toStrictEqual(false);
    });
  });

  describe(`when the given value is an object`, (): void => {
    beforeEach((): void => {
      channel = {
        key: `value`,
      };
    });

    it(`should return false`, (): void => {
      expect.assertions(1);

      const result = isDiscordGuildChannel(channel);

      expect(result).toStrictEqual(false);
    });
  });

  describe(`when the given value is a "GuildChannel" instance`, (): void => {
    beforeEach((): void => {
      channel = createInstance(GuildChannel.prototype);
    });

    it(`should return true`, (): void => {
      expect.assertions(1);

      const result = isDiscordGuildChannel(channel);

      expect(result).toStrictEqual(true);
    });
  });
});
