import { AbstractService } from '../../../classes/services/abstract.service';
import { ONE_EMITTER } from '../../../constants/one-emitter';
import { ServiceNameEnum } from '../../../enums/service-name.enum';
import { Client } from 'discord.js';
import _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

export class DiscordClientService extends AbstractService {
  private static _instance: DiscordClientService;

  public static getInstance(): DiscordClientService {
    if (_.isNil(DiscordClientService._instance)) {
      DiscordClientService._instance = new DiscordClientService();
    }

    return DiscordClientService._instance;
  }

  private _client: Client | undefined = undefined;
  private readonly _isReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public constructor() {
    super(ServiceNameEnum.DISCORD_CLIENT_SERVICE);
  }

  public createClient(): Client {
    this._client = new Client();

    return this._client;
  }

  public getClient(): Client {
    if (_.isNil(this._client)) {
      return this.createClient();
    }

    return this._client;
  }

  public isReady$(): Observable<boolean> {
    return this._isReady$.asObservable();
  }

  public isReady(): Promise<true> {
    return this.isReady$()
      .pipe(
        filter((isReady: Readonly<boolean>): boolean => _.isEqual(isReady, true)),
        take(ONE_EMITTER),
        map((): true => true)
      )
      .toPromise();
  }

  public notifyIsReady(): void {
    this._isReady$.next(true);
  }
}
