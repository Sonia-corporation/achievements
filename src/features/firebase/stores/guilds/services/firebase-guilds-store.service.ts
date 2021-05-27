import { AbstractService } from '../../../../../classes/services/abstract.service';
import { ServiceNameEnum } from '../../../../../enums/service-name.enum';
import { FirebaseGuildsService } from '../../../services/guilds/firebase-guilds.service';
import { IFirebaseGuild } from '../../../types/guilds/firebase-guild';
import { FirebaseGuildsStore } from '../firebase-guilds-store';
import { applyTransaction } from '@datorama/akita';
import _ from 'lodash';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class FirebaseGuildsStoreService extends AbstractService {
  private static _instance: FirebaseGuildsStoreService;

  public static getInstance(): FirebaseGuildsStoreService {
    if (_.isNil(FirebaseGuildsStoreService._instance)) {
      FirebaseGuildsStoreService._instance = new FirebaseGuildsStoreService();
    }

    return FirebaseGuildsStoreService._instance;
  }

  public constructor() {
    super(ServiceNameEnum.FIREBASE_GUILDS_STORE_SERVICE);
  }

  public init(): void {
    this._registerSubscription(this._watchFirebaseGuilds$().subscribe());
  }

  public addOrUpdateEntities(entities: IFirebaseGuild[]): void {
    FirebaseGuildsStore.getInstance().upsertMany(entities);
  }

  public addEntities(entities: IFirebaseGuild[]): void {
    FirebaseGuildsStore.getInstance().add(entities);
  }

  public removeAllEntities(): void {
    FirebaseGuildsStore.getInstance().remove();
  }

  public stopLoading(): void {
    FirebaseGuildsStore.getInstance().setLoading(false);
  }

  private _watchFirebaseGuilds$(): Observable<IFirebaseGuild[]> {
    return FirebaseGuildsService.getInstance()
      .onGuildsChange$()
      .pipe(
        tap({
          next: (entities: IFirebaseGuild[]): void => {
            applyTransaction((): void => {
              this.removeAllEntities();
              this.addEntities(entities);
              this.stopLoading();
            });
          },
        })
      );
  }
}
