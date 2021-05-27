import { ServerConfigCoreService } from './server-config-core.service';
import { AbstractService } from '../../../../classes/services/abstract.service';
import { ServiceNameEnum } from '../../../../enums/service-name.enum';
import { IServerConfig } from '../../interfaces/server-config';
import _ from 'lodash';

export class ServerConfigService extends AbstractService {
  private static _instance: ServerConfigService;

  public static getInstance(): ServerConfigService {
    if (_.isNil(ServerConfigService._instance)) {
      ServerConfigService._instance = new ServerConfigService();
    }

    return ServerConfigService._instance;
  }

  public constructor() {
    super(ServiceNameEnum.SERVER_CONFIG_SERVICE);
  }

  public getConfig(): IServerConfig {
    return {
      port: this.getPort(),
    };
  }

  public getPort(): number {
    return ServerConfigCoreService.getInstance().port;
  }
}
