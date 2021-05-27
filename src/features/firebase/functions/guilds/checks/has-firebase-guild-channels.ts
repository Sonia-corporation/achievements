import { FirebaseGuildVersionEnum } from '../../../enums/guilds/firebase-guild-version.enum';
import { IFirebaseGuildV4 } from '../../../interfaces/guilds/firebase-guild-v4';
import { IFirebaseGuildV5 } from '../../../interfaces/guilds/firebase-guild-v5';
import { IFirebaseGuild } from '../../../types/guilds/firebase-guild';
import _ from 'lodash';

/**
 * @description
 * Check if the given Firebase guild contains some [channels]{@link IFirebaseGuildV3#channels}
 *
 * @see [sonia-link-001]{@link https://github.com/Sonia-corporation/sonia-discord/blob/master/CONTRIBUTING.md#sonia-link-001}
 *
 * @param {Readonly<IFirebaseGuild>} firebaseGuild The Firebase guild
 *
 * @returns {boolean} true when the given guild is at least [v4]{@link FirebaseGuildVersionEnum.V4}
 */
export function hasFirebaseGuildChannels(
  firebaseGuild: Readonly<IFirebaseGuild>
): firebaseGuild is IFirebaseGuildV4 | IFirebaseGuildV5 {
  return _.includes([FirebaseGuildVersionEnum.V4, FirebaseGuildVersionEnum.V5], firebaseGuild.version);
}
