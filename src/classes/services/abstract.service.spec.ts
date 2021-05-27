import { AbstractService } from './abstract.service';
import { ServiceNameEnum } from '../../enums/service-name.enum';
import { CoreEventService } from '../../features/core/services/core-event.service';

class DummyService extends AbstractService {
  public constructor(serviceName: ServiceNameEnum) {
    super(serviceName);
  }
}

describe(`AbstractService`, (): void => {
  let coreEventService: CoreEventService;

  let serviceName: ServiceNameEnum;

  let coreEventServiceNotifyServiceCreatedSpy: jest.SpyInstance;

  beforeEach((): void => {
    coreEventService = CoreEventService.getInstance();

    coreEventServiceNotifyServiceCreatedSpy = jest.spyOn(coreEventService, `notifyServiceCreated`).mockImplementation();
  });

  describe(`when the service is created with the name ServiceNameEnum.APP_CONFIG_SERVICE`, (): void => {
    beforeEach((): void => {
      serviceName = ServiceNameEnum.APP_CONFIG_SERVICE;
    });

    it(`should notify about the creation of the AppConfig service`, (): void => {
      expect.assertions(2);

      new DummyService(serviceName);

      expect(coreEventServiceNotifyServiceCreatedSpy).toHaveBeenCalledTimes(1);
      expect(coreEventServiceNotifyServiceCreatedSpy).toHaveBeenCalledWith(ServiceNameEnum.APP_CONFIG_SERVICE);
    });
  });

  describe(`when the service is created with the name ServiceNameEnum.APP_CONFIG_CORE_SERVICE`, (): void => {
    beforeEach((): void => {
      serviceName = ServiceNameEnum.APP_CONFIG_CORE_SERVICE;
    });

    it(`should notify about the creation of the AppConfigCore service`, (): void => {
      expect.assertions(2);

      new DummyService(serviceName);

      expect(coreEventServiceNotifyServiceCreatedSpy).toHaveBeenCalledTimes(1);
      expect(coreEventServiceNotifyServiceCreatedSpy).toHaveBeenCalledWith(ServiceNameEnum.APP_CONFIG_CORE_SERVICE);
    });
  });
});
