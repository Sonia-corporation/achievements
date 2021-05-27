import { IGetDiscordDevPrefix } from '../../interfaces/dev-prefix/get-discord-dev-prefix';
import { wrapUserIdIntoMention } from '../../mentions/functions/wrap-user-id-into-mention';
import _ from 'lodash';

/**
 * @param {Readonly<IGetDiscordDevPrefix>} config The configuration object
 * [getDiscordDevPrefix#hasEmphasis]{@link IGetDiscordDevPrefix#hasEmphasis} will be set to true when not a boolean
 * [getDiscordDevPrefix#asMention]{@link IGetDiscordDevPrefix#asMention} will be set to false when not a boolean
 *
 * @returns {string} A string representing the current developer profile
 */
export function getDiscordDevPrefix({
  hasEmphasis = true,
  asMention = false,
  discordId,
  nickname,
}: Readonly<IGetDiscordDevPrefix>): string {
  let discordDevPrefix = `[dev]`;

  if (_.isEqual(asMention, true) && _.isString(discordId) && !_.isEmpty(discordId)) {
    discordDevPrefix = `[dev - ${wrapUserIdIntoMention(discordId)}]`;
  } else {
    if (_.isString(nickname) && !_.isEmpty(nickname)) {
      discordDevPrefix = `[dev - ${nickname}]`;
    }
  }

  if (_.isEqual(hasEmphasis, true)) {
    return `**${discordDevPrefix}**`;
  }

  return discordDevPrefix;
}
