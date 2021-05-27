import { DISCORD_MESSAGE_COMMAND_FEATURE_NAME_NOON } from './discord-message-command-feature-name-noon';
import { DISCORD_MESSAGE_COMMAND_FEATURE_NAME_RELEASE_NOTES } from './discord-message-command-feature-name-release-notes';
import { DISCORD_MESSAGE_COMMAND_FEATURE_NAMES } from './discord-message-command-feature-names';
import { DiscordCommandFirstArguments } from '../../../../classes/commands/arguments/discord-command-first-arguments';

describe(`DISCORD_MESSAGE_COMMAND_FEATURE_NAMES`, (): void => {
  it(`should be the Discord features command message`, (): void => {
    expect.assertions(1);

    expect(DISCORD_MESSAGE_COMMAND_FEATURE_NAMES).toStrictEqual(
      new DiscordCommandFirstArguments([
        DISCORD_MESSAGE_COMMAND_FEATURE_NAME_NOON,
        DISCORD_MESSAGE_COMMAND_FEATURE_NAME_RELEASE_NOTES,
      ])
    );
  });
});
