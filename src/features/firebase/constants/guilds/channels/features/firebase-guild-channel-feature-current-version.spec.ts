import { FIREBASE_GUILD_CHANNEL_FEATURE_CURRENT_VERSION } from './firebase-guild-channel-feature-current-version';

describe(`FIREBASE_GUILD_CHANNEL_FEATURE_CURRENT_VERSION`, (): void => {
  it(`should be V2`, (): void => {
    expect.assertions(1);

    expect(FIREBASE_GUILD_CHANNEL_FEATURE_CURRENT_VERSION).toStrictEqual(2);
  });
});
