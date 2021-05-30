export class LoggerService {
  public static log(message: Readonly<string>): LoggerService {
    console.log(message);

    return this;
  }

  public static debug(message: Readonly<string>): LoggerService {
    console.debug(message);

    return this;
  }

  public constructor() {
    LoggerService.debug(`LoggerService created`);
  }
}
