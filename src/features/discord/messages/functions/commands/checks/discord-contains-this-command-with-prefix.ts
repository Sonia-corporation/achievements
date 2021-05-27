import { discordStrictlyContainsThisCommandWithPrefix } from './discord-strictly-contains-this-command-with-prefix';
import { DiscordMessageCommandEnum } from '../../../enums/commands/discord-message-command.enum';
import { IDiscordContainsThisCommandWithPrefixData } from '../../../interfaces/commands/checks/discord-contains-this-command-with-prefix-data';
import _ from 'lodash';

/**
 * @param root0
 * @param root0.commands
 * @param root0.message
 * @param root0.prefix
 */
export function discordContainsThisCommandWithPrefix({
  commands,
  message,
  prefix,
}: Readonly<IDiscordContainsThisCommandWithPrefixData>): boolean {
  let containsThisCommandWithPrefix = false;

  if (_.isString(commands)) {
    const command: DiscordMessageCommandEnum = commands;

    containsThisCommandWithPrefix = discordStrictlyContainsThisCommandWithPrefix({
      command,
      message,
      prefix,
    });
  } else if (_.isArray(commands)) {
    _.forEach(commands, (command: Readonly<DiscordMessageCommandEnum>): false | void => {
      if (
        discordStrictlyContainsThisCommandWithPrefix({
          command,
          message,
          prefix,
        })
      ) {
        containsThisCommandWithPrefix = true;

        return false;
      }
    });
  }

  return containsThisCommandWithPrefix;
}
