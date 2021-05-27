import { discordContainsThisCommandWithOneOfThesePrefixes } from './discord-contains-this-command-with-one-of-these-prefixes';
import { DiscordMessageCommandEnum } from '../../../enums/commands/discord-message-command.enum';
import { IDiscordContainsThisCommandWithOneOfThesePrefixesData } from '../../../interfaces/commands/checks/discord-contains-this-command-with-one-of-these-prefixes-data';
import { createMock } from 'ts-auto-mock';

describe(`containsThisCommandWithOneOfThesePrefixes()`, (): void => {
  let data: IDiscordContainsThisCommandWithOneOfThesePrefixesData;

  beforeEach((): void => {
    data = createMock<IDiscordContainsThisCommandWithOneOfThesePrefixesData>();
  });

  describe(`when the message is empty`, (): void => {
    beforeEach((): void => {
      data.message = ``;
    });

    describe(`when the command is help`, (): void => {
      beforeEach((): void => {
        data.commands = DiscordMessageCommandEnum.HELP;
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });

    describe(`when the command is bug`, (): void => {
      beforeEach((): void => {
        data.commands = DiscordMessageCommandEnum.BUG;
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });

    describe(`when the command is help and cookie`, (): void => {
      beforeEach((): void => {
        data.commands = [DiscordMessageCommandEnum.HELP, DiscordMessageCommandEnum.COOKIE];
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });

    describe(`when the command is bug and cookie`, (): void => {
      beforeEach((): void => {
        data.commands = [DiscordMessageCommandEnum.BUG, DiscordMessageCommandEnum.COOKIE];
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });
  });

  describe(`when the message is a simple text message without a command`, (): void => {
    beforeEach((): void => {
      data.message = `simple message`;
    });

    describe(`when the command is help`, (): void => {
      beforeEach((): void => {
        data.commands = DiscordMessageCommandEnum.HELP;
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });

    describe(`when the command is bug`, (): void => {
      beforeEach((): void => {
        data.commands = DiscordMessageCommandEnum.BUG;
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });

    describe(`when the command is help and cookie`, (): void => {
      beforeEach((): void => {
        data.commands = [DiscordMessageCommandEnum.HELP, DiscordMessageCommandEnum.COOKIE];
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });

    describe(`when the command is bug and cookie`, (): void => {
      beforeEach((): void => {
        data.commands = [DiscordMessageCommandEnum.BUG, DiscordMessageCommandEnum.COOKIE];
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });
  });

  describe(`when the message is a simple text message with a "help" command but without a prefix`, (): void => {
    beforeEach((): void => {
      data.message = `simple message with help command`;
    });

    describe(`when the command is help`, (): void => {
      beforeEach((): void => {
        data.commands = DiscordMessageCommandEnum.HELP;
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });

    describe(`when the command is bug`, (): void => {
      beforeEach((): void => {
        data.commands = DiscordMessageCommandEnum.BUG;
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });

    describe(`when the command is help and cookie`, (): void => {
      beforeEach((): void => {
        data.commands = [DiscordMessageCommandEnum.HELP, DiscordMessageCommandEnum.COOKIE];
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });

    describe(`when the command is bug and cookie`, (): void => {
      beforeEach((): void => {
        data.commands = [DiscordMessageCommandEnum.BUG, DiscordMessageCommandEnum.COOKIE];
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });
  });

  describe(`when the message is a simple text message with a "help" command and with a "!" prefix`, (): void => {
    beforeEach((): void => {
      data.message = `simple message with !help command`;
    });

    describe(`when the command is help`, (): void => {
      beforeEach((): void => {
        data.commands = DiscordMessageCommandEnum.HELP;
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return true`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(true);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return true`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(true);
        });
      });
    });

    describe(`when the command is bug`, (): void => {
      beforeEach((): void => {
        data.commands = DiscordMessageCommandEnum.BUG;
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });

    describe(`when the command is help and cookie`, (): void => {
      beforeEach((): void => {
        data.commands = [DiscordMessageCommandEnum.HELP, DiscordMessageCommandEnum.COOKIE];
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return true`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(true);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return true`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(true);
        });
      });
    });

    describe(`when the command is bug and cookie`, (): void => {
      beforeEach((): void => {
        data.commands = [DiscordMessageCommandEnum.BUG, DiscordMessageCommandEnum.COOKIE];
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });
  });

  describe(`when the message is a simple upper case text message with a "help" command and with a "!" prefix`, (): void => {
    beforeEach((): void => {
      data.message = `SIMPLE MESSAGE WITH !HELP COMMAND`;
    });

    describe(`when the command is help`, (): void => {
      beforeEach((): void => {
        data.commands = DiscordMessageCommandEnum.HELP;
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return true`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(true);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return true`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(true);
        });
      });
    });

    describe(`when the command is bug`, (): void => {
      beforeEach((): void => {
        data.commands = DiscordMessageCommandEnum.BUG;
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });

    describe(`when the command is help and cookie`, (): void => {
      beforeEach((): void => {
        data.commands = [DiscordMessageCommandEnum.HELP, DiscordMessageCommandEnum.COOKIE];
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return true`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(true);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return true`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(true);
        });
      });
    });

    describe(`when the command is bug and cookie`, (): void => {
      beforeEach((): void => {
        data.commands = [DiscordMessageCommandEnum.BUG, DiscordMessageCommandEnum.COOKIE];
      });

      describe(`when the prefix is $`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is !`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is $ and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`$`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });

      describe(`when the prefix is ! and _`, (): void => {
        beforeEach((): void => {
          data.prefixes = [`!`, `_`];
        });

        it(`should return false`, (): void => {
          expect.assertions(1);

          const result = discordContainsThisCommandWithOneOfThesePrefixes(data);

          expect(result).toStrictEqual(false);
        });
      });
    });
  });
});
