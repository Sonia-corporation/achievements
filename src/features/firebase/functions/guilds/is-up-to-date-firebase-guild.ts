import { FIREBASE_GUILD_CURRENT_VERSION } from '../../constants/guilds/firebase-guild-current-version';
import { IFirebaseGuild } from '../../types/guilds/firebase-guild';
import { IFirebaseGuildVFinal } from '../../types/guilds/firebase-guild-v-final';
import _ from 'lodash';

/**
 * @param firebaseGuild
 */
export function isUpToDateFirebaseGuild(
  firebaseGuild: Readonly<IFirebaseGuild>
): firebaseGuild is IFirebaseGuildVFinal {
  return _.isEqual(firebaseGuild.version, FIREBASE_GUILD_CURRENT_VERSION);
}
