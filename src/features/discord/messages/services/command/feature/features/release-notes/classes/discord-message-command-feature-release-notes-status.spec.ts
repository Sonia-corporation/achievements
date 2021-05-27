import { DiscordMessageCommandFeatureReleaseNotesStatus } from './discord-message-command-feature-release-notes-status';
import { FirebaseGuildChannelFeatureReleaseNotesVersionEnum } from '../../../../../../../../firebase/enums/guilds/channels/features/firebase-guild-channel-feature-release-notes-version.enum';
import { FirebaseGuildChannelFeatureVersionEnum } from '../../../../../../../../firebase/enums/guilds/channels/features/firebase-guild-channel-feature-version.enum';
import { FirebaseGuildChannelVersionEnum } from '../../../../../../../../firebase/enums/guilds/channels/firebase-guild-channel-version.enum';
import { FirebaseGuildVersionEnum } from '../../../../../../../../firebase/enums/guilds/firebase-guild-version.enum';
import { IFirebaseGuildV1 } from '../../../../../../../../firebase/interfaces/guilds/firebase-guild-v1';
import { IFirebaseGuildV2 } from '../../../../../../../../firebase/interfaces/guilds/firebase-guild-v2';
import { FirebaseGuildsChannelsService } from '../../../../../../../../firebase/services/guilds/channels/firebase-guilds-channels.service';
import { FirebaseGuildsStoreQuery } from '../../../../../../../../firebase/stores/guilds/services/firebase-guilds-store.query';
import { IFirebaseGuildChannelVFinal } from '../../../../../../../../firebase/types/guilds/channels/firebase-guild-channel-v-final';
import { IFirebaseGuild } from '../../../../../../../../firebase/types/guilds/firebase-guild';
import { IFirebaseGuildVFinal } from '../../../../../../../../firebase/types/guilds/firebase-guild-v-final';
import { ILoggerLog } from '../../../../../../../../logger/interfaces/logger-log';
import { LoggerService } from '../../../../../../../../logger/services/logger.service';
import { DiscordChannelService } from '../../../../../../../channels/services/discord-channel.service';
import { IDiscordMessageResponse } from '../../../../../../interfaces/discord-message-response';
import { IAnyDiscordMessage } from '../../../../../../types/any-discord-message';
import { DiscordMessageCommandFeatureReleaseNotesFlagEnum } from '../enums/discord-message-command-feature-release-notes-flag.enum';
import { Message } from 'discord.js';
import { createMock } from 'ts-auto-mock';

jest.mock(`../../../../../../../../logger/services/chalk/chalk.service`);

describe(`DiscordMessageCommandFeatureReleaseNotesStatus`, (): void => {
  let service: DiscordMessageCommandFeatureReleaseNotesStatus<DiscordMessageCommandFeatureReleaseNotesFlagEnum>;
  let loggerService: LoggerService;
  let firebaseGuildsStoreQuery: FirebaseGuildsStoreQuery;
  let firebaseGuildsChannelsService: FirebaseGuildsChannelsService;
  let discordChannelService: DiscordChannelService;

  beforeEach((): void => {
    loggerService = LoggerService.getInstance();
    firebaseGuildsStoreQuery = FirebaseGuildsStoreQuery.getInstance();
    firebaseGuildsChannelsService = FirebaseGuildsChannelsService.getInstance();
    discordChannelService = DiscordChannelService.getInstance();
  });

  describe(`execute()`, (): void => {
    let anyDiscordMessage: IAnyDiscordMessage;

    let loggerServiceDebugSpy: jest.SpyInstance;
    let isEnabledSpy: jest.SpyInstance;
    let getMessageResponseSpy: jest.SpyInstance;
    let discordChannelServiceIsValidSpy: jest.SpyInstance;

    beforeEach((): void => {
      service = new DiscordMessageCommandFeatureReleaseNotesStatus();
      anyDiscordMessage = createMock<IAnyDiscordMessage>({
        id: `dummy-id`,
      });

      loggerServiceDebugSpy = jest.spyOn(loggerService, `debug`).mockImplementation();
      isEnabledSpy = jest.spyOn(service, `isEnabled`).mockRejectedValue(new Error(`isEnabled error`));
      getMessageResponseSpy = jest
        .spyOn(service, `getMessageResponse`)
        .mockRejectedValue(new Error(`getMessageResponse error`));
      discordChannelServiceIsValidSpy = jest.spyOn(discordChannelService, `isValid`).mockReturnValue(false);
    });

    it(`should log about executing the status action`, async (): Promise<void> => {
      expect.assertions(3);

      await expect(service.execute(anyDiscordMessage)).rejects.toThrow(new Error(`isEnabled error`));

      expect(loggerServiceDebugSpy).toHaveBeenCalledTimes(1);
      expect(loggerServiceDebugSpy).toHaveBeenCalledWith({
        context: `DiscordMessageCommandFeatureReleaseNotesStatus`,
        hasExtendedContext: true,
        message: `context-[dummy-id] text-executing value-status action`,
      } as ILoggerLog);
    });

    it(`should get the enabled state`, async (): Promise<void> => {
      expect.assertions(3);

      await expect(service.execute(anyDiscordMessage)).rejects.toThrow(new Error(`isEnabled error`));

      expect(isEnabledSpy).toHaveBeenCalledTimes(1);
      expect(isEnabledSpy).toHaveBeenCalledWith(anyDiscordMessage);
    });

    describe(`when the release notes enabled state failed to be fetched`, (): void => {
      beforeEach((): void => {
        isEnabledSpy.mockRejectedValue(new Error(`isEnabled error`));
      });

      it(`should throw an error`, async (): Promise<void> => {
        expect.assertions(1);

        await expect(service.execute(anyDiscordMessage)).rejects.toThrow(new Error(`isEnabled error`));
      });
    });

    describe(`when the release notes enabled state was successfully fetched`, (): void => {
      let firebaseGuildChannelFeatureReleaseNotesEnabledState: boolean | undefined;

      beforeEach((): void => {
        firebaseGuildChannelFeatureReleaseNotesEnabledState = false;

        isEnabledSpy.mockResolvedValue(firebaseGuildChannelFeatureReleaseNotesEnabledState);
      });

      describe(`when the Discord message guild is not valid`, (): void => {
        beforeEach((): void => {
          anyDiscordMessage = createMock<IAnyDiscordMessage>({
            guild: null,
            id: `dummy-id`,
          });

          discordChannelServiceIsValidSpy.mockReturnValue(false);
        });

        it(`should throw an error about the Firebase guild being invalid`, async (): Promise<void> => {
          expect.assertions(1);

          await expect(service.execute(anyDiscordMessage)).rejects.toThrow(new Error(`Firebase guild invalid`));
        });
      });

      describe(`when the Discord message guild is valid`, (): void => {
        beforeEach((): void => {
          anyDiscordMessage = createMock<IAnyDiscordMessage>({
            guild: {},
            id: `dummy-id`,
          });

          discordChannelServiceIsValidSpy.mockReturnValue(true);
        });

        describe(`when the Discord message channel is not a text channel`, (): void => {
          beforeEach((): void => {
            anyDiscordMessage = createMock<IAnyDiscordMessage>({
              channel: {
                id: `dummy-channel-id`,
                type: `news`,
              },
              guild: {
                id: `dummy-guild-id`,
              },
              id: `dummy-id`,
            });

            discordChannelServiceIsValidSpy.mockReturnValue(false);
          });

          it(`should throw an error about the Firebase channel being invalid`, async (): Promise<void> => {
            expect.assertions(1);

            await expect(service.execute(anyDiscordMessage)).rejects.toThrow(new Error(`Firebase channel invalid`));
          });
        });

        describe(`when the Discord message channel is a DM channel`, (): void => {
          beforeEach((): void => {
            anyDiscordMessage = createMock<IAnyDiscordMessage>({
              channel: {
                id: `dummy-channel-id`,
                type: `dm`,
              },
              guild: {
                id: `dummy-guild-id`,
              },
              id: `dummy-id`,
            });

            discordChannelServiceIsValidSpy.mockReturnValue(true);
          });

          it(`should fetch a message response`, async (): Promise<void> => {
            expect.assertions(3);

            await expect(service.execute(anyDiscordMessage)).rejects.toThrow(new Error(`getMessageResponse error`));

            expect(getMessageResponseSpy).toHaveBeenCalledTimes(1);
            expect(getMessageResponseSpy).toHaveBeenCalledWith(firebaseGuildChannelFeatureReleaseNotesEnabledState);
          });

          describe(`when the message response could not be fetched`, (): void => {
            beforeEach((): void => {
              getMessageResponseSpy.mockRejectedValue(new Error(`getMessageResponse error`));
            });

            it(`should throw an error about the message response fail`, async (): Promise<void> => {
              expect.assertions(1);

              await expect(service.execute(anyDiscordMessage)).rejects.toThrow(new Error(`getMessageResponse error`));
            });
          });

          describe(`when the message response was successfully fetched`, (): void => {
            let discordMessageResponse: IDiscordMessageResponse;

            beforeEach((): void => {
              getMessageResponseSpy.mockResolvedValue(discordMessageResponse);
            });

            it(`should return the message response`, async (): Promise<void> => {
              expect.assertions(1);

              const result = await service.execute(anyDiscordMessage);

              expect(result).toStrictEqual(discordMessageResponse);
            });
          });
        });

        describe(`when the Discord message channel is a text channel`, (): void => {
          beforeEach((): void => {
            anyDiscordMessage = createMock<Message>({
              channel: {
                id: `dummy-channel-id`,
                type: `text`,
              },
              guild: {
                id: `dummy-guild-id`,
              },
              id: `dummy-id`,
            });

            discordChannelServiceIsValidSpy.mockReturnValue(true);
          });

          it(`should fetch a message response`, async (): Promise<void> => {
            expect.assertions(3);

            await expect(service.execute(anyDiscordMessage)).rejects.toThrow(new Error(`getMessageResponse error`));

            expect(getMessageResponseSpy).toHaveBeenCalledTimes(1);
            expect(getMessageResponseSpy).toHaveBeenCalledWith(firebaseGuildChannelFeatureReleaseNotesEnabledState);
          });

          describe(`when the message response could not be fetched`, (): void => {
            beforeEach((): void => {
              getMessageResponseSpy.mockRejectedValue(new Error(`getMessageResponse error`));
            });

            it(`should throw an error about the message response fail`, async (): Promise<void> => {
              expect.assertions(1);

              await expect(service.execute(anyDiscordMessage)).rejects.toThrow(new Error(`getMessageResponse error`));
            });
          });

          describe(`when the message response was successfully fetched`, (): void => {
            let discordMessageResponse: IDiscordMessageResponse;

            beforeEach((): void => {
              getMessageResponseSpy.mockResolvedValue(discordMessageResponse);
            });

            it(`should return the message response`, async (): Promise<void> => {
              expect.assertions(1);

              const result = await service.execute(anyDiscordMessage);

              expect(result).toStrictEqual(discordMessageResponse);
            });
          });
        });
      });
    });
  });

  describe(`isEnabled()`, (): void => {
    let anyDiscordMessage: IAnyDiscordMessage;
    let firebaseGuildVFinal: IFirebaseGuild;

    let loggerServiceErrorSpy: jest.SpyInstance;
    let firebaseGuildsStoreQueryGetEntitySpy: jest.SpyInstance;
    let firebaseGuildsChannelsServiceIsValidSpy: jest.SpyInstance;
    let firebaseGuildsChannelsServiceIsUpToDateSpy: jest.SpyInstance;

    beforeEach((): void => {
      service = new DiscordMessageCommandFeatureReleaseNotesStatus();
      anyDiscordMessage = createMock<IAnyDiscordMessage>();
      firebaseGuildVFinal = createMock<IFirebaseGuildVFinal>();

      loggerServiceErrorSpy = jest.spyOn(loggerService, `error`).mockImplementation();
      firebaseGuildsStoreQueryGetEntitySpy = jest
        .spyOn(firebaseGuildsStoreQuery, `getEntity`)
        .mockReturnValue(undefined);
      firebaseGuildsChannelsServiceIsValidSpy = jest
        .spyOn(firebaseGuildsChannelsService, `isValid`)
        .mockImplementation();
      firebaseGuildsChannelsServiceIsUpToDateSpy = jest
        .spyOn(firebaseGuildsChannelsService, `isUpToDate`)
        .mockImplementation();
    });

    describe(`when the given Discord message guild is null`, (): void => {
      beforeEach((): void => {
        anyDiscordMessage = createMock<IAnyDiscordMessage>({
          guild: null,
          id: `dummy-id`,
        });
      });

      it(`should log about the empty guild`, async (): Promise<void> => {
        expect.assertions(3);

        await expect(service.isEnabled(anyDiscordMessage)).rejects.toThrow(
          new Error(`Could not get the guild from the message`)
        );

        expect(loggerServiceErrorSpy).toHaveBeenCalledTimes(1);
        expect(loggerServiceErrorSpy).toHaveBeenCalledWith({
          context: `DiscordMessageCommandFeatureReleaseNotesStatus`,
          hasExtendedContext: true,
          message: `context-[dummy-id] text-could not get the guild from the message`,
        } as ILoggerLog);
      });

      it(`should throw an error`, async (): Promise<void> => {
        expect.assertions(1);

        await expect(service.isEnabled(anyDiscordMessage)).rejects.toThrow(
          new Error(`Could not get the guild from the message`)
        );
      });
    });

    describe(`when the given Discord message guild is valid`, (): void => {
      beforeEach((): void => {
        anyDiscordMessage = createMock<Message>({
          channel: {
            id: `dummy-channel-id`,
          },
          guild: {
            id: `dummy-guild-id`,
          },
          id: `dummy-id`,
        });
      });

      it(`should get the Discord message guild from the Firebase guilds store`, async (): Promise<void> => {
        expect.assertions(3);

        await expect(service.isEnabled(anyDiscordMessage)).rejects.toThrow(
          new Error(`Could not find the guild dummy-guild-id in Firebase`)
        );

        expect(firebaseGuildsStoreQueryGetEntitySpy).toHaveBeenCalledTimes(1);
        expect(firebaseGuildsStoreQueryGetEntitySpy).toHaveBeenCalledWith(`dummy-guild-id`);
      });

      describe(`when the given Discord message guild does not exist in the Firebase guilds store`, (): void => {
        beforeEach((): void => {
          firebaseGuildsStoreQueryGetEntitySpy.mockReturnValue(undefined);
        });

        it(`should log about the empty guild in Firebase`, async (): Promise<void> => {
          expect.assertions(3);

          await expect(service.isEnabled(anyDiscordMessage)).rejects.toThrow(
            new Error(`Could not find the guild dummy-guild-id in Firebase`)
          );

          expect(loggerServiceErrorSpy).toHaveBeenCalledTimes(1);
          expect(loggerServiceErrorSpy).toHaveBeenCalledWith({
            context: `DiscordMessageCommandFeatureReleaseNotesStatus`,
            hasExtendedContext: true,
            message: `context-[dummy-id] text-could not find the guild value-dummy-guild-id in Firebase`,
          } as ILoggerLog);
        });

        it(`should throw an error`, async (): Promise<void> => {
          expect.assertions(1);

          await expect(service.isEnabled(anyDiscordMessage)).rejects.toThrow(
            new Error(`Could not find the guild dummy-guild-id in Firebase`)
          );
        });
      });

      describe(`when the given Discord message guild exist in the Firebase guilds store`, (): void => {
        beforeEach((): void => {
          firebaseGuildsStoreQueryGetEntitySpy.mockReturnValue(firebaseGuildVFinal);
        });

        describe(`when the Firebase guilds store channels are empty`, (): void => {
          beforeEach((): void => {
            firebaseGuildVFinal = createMock<IFirebaseGuildVFinal>({
              channels: {},
              version: FirebaseGuildVersionEnum.V5,
            });

            firebaseGuildsStoreQueryGetEntitySpy.mockReturnValue(firebaseGuildVFinal);
          });

          it(`should return undefined`, async (): Promise<void> => {
            expect.assertions(1);

            const result = await service.isEnabled(anyDiscordMessage);

            expect(result).toBeUndefined();
          });
        });

        describe(`when the Firebase guilds are v1`, (): void => {
          beforeEach((): void => {
            firebaseGuildVFinal = createMock<IFirebaseGuildV1>({
              version: FirebaseGuildVersionEnum.V1,
            });

            firebaseGuildsStoreQueryGetEntitySpy.mockReturnValue(firebaseGuildVFinal);
          });

          it(`should return undefined`, async (): Promise<void> => {
            expect.assertions(1);

            const result = await service.isEnabled(anyDiscordMessage);

            expect(result).toBeUndefined();
          });
        });

        describe(`when the Firebase guilds are v2`, (): void => {
          beforeEach((): void => {
            firebaseGuildVFinal = createMock<IFirebaseGuildV2>({
              version: FirebaseGuildVersionEnum.V2,
            });

            firebaseGuildsStoreQueryGetEntitySpy.mockReturnValue(firebaseGuildVFinal);
          });

          it(`should return undefined`, async (): Promise<void> => {
            expect.assertions(1);

            const result = await service.isEnabled(anyDiscordMessage);

            expect(result).toBeUndefined();
          });
        });

        describe(`when the given Discord message channel does not exist in the Firebase guilds store channels`, (): void => {
          beforeEach((): void => {
            firebaseGuildVFinal = createMock<IFirebaseGuildVFinal>({
              channels: {
                'bad-dummy-channel-id': createMock<IFirebaseGuildChannelVFinal>({
                  id: `bad-dummy-channel-id`,
                }),
              },
              version: FirebaseGuildVersionEnum.V5,
            });

            firebaseGuildsStoreQueryGetEntitySpy.mockReturnValue(firebaseGuildVFinal);
          });

          it(`should return undefined`, async (): Promise<void> => {
            expect.assertions(1);

            const result = await service.isEnabled(anyDiscordMessage);

            expect(result).toBeUndefined();
          });
        });

        describe(`when the given Discord message channel exist in the Firebase guilds store channels`, (): void => {
          beforeEach((): void => {
            firebaseGuildVFinal = createMock<IFirebaseGuildVFinal>({
              channels: {
                'dummy-channel-id': createMock<IFirebaseGuildChannelVFinal>({
                  id: `dummy-channel-id`,
                }),
              },
              version: FirebaseGuildVersionEnum.V5,
            });

            firebaseGuildsStoreQueryGetEntitySpy.mockReturnValue(firebaseGuildVFinal);
          });

          describe(`when the channel does not have the release notes feature configured yet`, (): void => {
            beforeEach((): void => {
              firebaseGuildVFinal = createMock<IFirebaseGuildVFinal>({
                channels: {
                  'dummy-channel-id': createMock<IFirebaseGuildChannelVFinal>({
                    features: {
                      releaseNotes: undefined,
                    },
                    id: `dummy-channel-id`,
                  }),
                },
                version: FirebaseGuildVersionEnum.V5,
              });

              firebaseGuildsStoreQueryGetEntitySpy.mockReturnValue(firebaseGuildVFinal);
            });

            it(`should return undefined`, async (): Promise<void> => {
              expect.assertions(1);

              const result = await service.isEnabled(anyDiscordMessage);

              expect(result).toBeUndefined();
            });
          });

          describe(`when the channel does not have the release notes feature enabled option configured yet`, (): void => {
            beforeEach((): void => {
              firebaseGuildVFinal = createMock<IFirebaseGuildVFinal>({
                channels: {
                  'dummy-channel-id': createMock<IFirebaseGuildChannelVFinal>({
                    features: {
                      releaseNotes: {
                        isEnabled: undefined,
                      },
                    },
                    id: `dummy-channel-id`,
                  }),
                },
                version: FirebaseGuildVersionEnum.V5,
              });

              firebaseGuildsStoreQueryGetEntitySpy.mockReturnValue(firebaseGuildVFinal);
            });

            it(`should return undefined`, async (): Promise<void> => {
              expect.assertions(1);

              const result = await service.isEnabled(anyDiscordMessage);

              expect(result).toBeUndefined();
            });
          });

          describe(`when the channel is not valid`, (): void => {
            beforeEach((): void => {
              firebaseGuildsChannelsServiceIsValidSpy.mockReturnValue(false);
            });

            it(`should return undefined`, async (): Promise<void> => {
              expect.assertions(1);

              const result = await service.isEnabled(anyDiscordMessage);

              expect(result).toBeUndefined();
            });
          });

          describe(`when the channel is valid`, (): void => {
            beforeEach((): void => {
              firebaseGuildsChannelsServiceIsValidSpy.mockReturnValue(true);
            });

            describe(`when the channel is not up-to-date`, (): void => {
              beforeEach((): void => {
                firebaseGuildsChannelsServiceIsUpToDateSpy.mockReturnValue(false);
              });

              it(`should return undefined`, async (): Promise<void> => {
                expect.assertions(1);

                const result = await service.isEnabled(anyDiscordMessage);

                expect(result).toBeUndefined();
              });
            });

            describe(`when the channel is up-to-date`, (): void => {
              beforeEach((): void => {
                firebaseGuildsChannelsServiceIsUpToDateSpy.mockReturnValue(true);
              });

              describe(`when the channel has the release notes feature enabled`, (): void => {
                beforeEach((): void => {
                  firebaseGuildVFinal = createMock<IFirebaseGuildVFinal>({
                    channels: {
                      'dummy-channel-id': createMock<IFirebaseGuildChannelVFinal>({
                        features: {
                          releaseNotes: {
                            isEnabled: true,
                            version: FirebaseGuildChannelFeatureReleaseNotesVersionEnum.V1,
                          },
                          version: FirebaseGuildChannelFeatureVersionEnum.V2,
                        },
                        id: `dummy-channel-id`,
                        version: FirebaseGuildChannelVersionEnum.V2,
                      }),
                    },
                    version: FirebaseGuildVersionEnum.V5,
                  });

                  firebaseGuildsStoreQueryGetEntitySpy.mockReturnValue(firebaseGuildVFinal);
                });

                it(`should return true`, async (): Promise<void> => {
                  expect.assertions(1);

                  const result = await service.isEnabled(anyDiscordMessage);

                  expect(result).toStrictEqual(true);
                });
              });

              describe(`when the channel has the release notes feature disabled`, (): void => {
                beforeEach((): void => {
                  firebaseGuildVFinal = createMock<IFirebaseGuildVFinal>({
                    channels: {
                      'dummy-channel-id': createMock<IFirebaseGuildChannelVFinal>({
                        features: {
                          releaseNotes: {
                            isEnabled: false,
                          },
                        },
                        id: `dummy-channel-id`,
                      }),
                    },
                    version: FirebaseGuildVersionEnum.V5,
                  });

                  firebaseGuildsStoreQueryGetEntitySpy.mockReturnValue(firebaseGuildVFinal);
                });

                it(`should return false`, async (): Promise<void> => {
                  expect.assertions(1);

                  const result = await service.isEnabled(anyDiscordMessage);

                  expect(result).toStrictEqual(false);
                });
              });
            });
          });
        });
      });
    });
  });

  describe(`getMessageResponse()`, (): void => {
    let isEnabled: boolean | undefined;

    beforeEach((): void => {
      service = new DiscordMessageCommandFeatureReleaseNotesStatus();
      isEnabled = false;
    });

    it(`should return a Discord message response not split`, async (): Promise<void> => {
      expect.assertions(1);

      const result = await service.getMessageResponse(isEnabled);

      expect(result.options.split).toStrictEqual(false);
    });

    describe(`when the enabled state is undefined`, (): void => {
      beforeEach((): void => {
        isEnabled = undefined;
      });

      it(`should return a Discord message response with a response telling that the release notes feature is disabled`, async (): Promise<void> => {
        expect.assertions(1);

        const result = await service.getMessageResponse(isEnabled);

        expect(result.response).toStrictEqual(`The release notes feature is disabled.`);
      });
    });

    describe(`when the enabled state is false`, (): void => {
      beforeEach((): void => {
        isEnabled = false;
      });

      it(`should return a Discord message response with a response telling that the release notes feature is disabled`, async (): Promise<void> => {
        expect.assertions(1);

        const result = await service.getMessageResponse(isEnabled);

        expect(result.response).toStrictEqual(`The release notes feature is disabled.`);
      });
    });

    describe(`when the enabled state is true`, (): void => {
      beforeEach((): void => {
        isEnabled = true;
      });

      it(`should return a Discord message response with a response telling that the release notes feature is enabled`, async (): Promise<void> => {
        expect.assertions(1);

        const result = await service.getMessageResponse(isEnabled);

        expect(result.response).toStrictEqual(`The release notes feature is enabled.`);
      });
    });
  });
});
