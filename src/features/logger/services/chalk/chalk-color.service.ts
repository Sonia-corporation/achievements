import { ChalkService } from './chalk.service';
import { AbstractService } from '../../../../classes/services/abstract.service';
import { ServiceNameEnum } from '../../../../enums/service-name.enum';
import { CHALK_LEVELS_HUMANIZED } from '../../constants/chalk/chalk-levels-humanized';
import { LoggerService } from '../logger.service';
import chalk from 'chalk';
import _ from 'lodash';

const MINIMUM_CHALK_LEVEL = 0;
const MAXIMUM_CHALK_LEVEL = 3;

export class ChalkColorService extends AbstractService {
  private static _instance: ChalkColorService;

  public static getInstance(): ChalkColorService {
    if (_.isNil(ChalkColorService._instance)) {
      ChalkColorService._instance = new ChalkColorService();
    }

    return ChalkColorService._instance;
  }

  public constructor() {
    super(ServiceNameEnum.CHALK_COLOR_SERVICE);
  }

  public init(): void {
    this._logColorLevel();
  }

  private _logColorLevel(): void {
    const chalkLevel: chalk.Level = ChalkService.getInstance().getLevel();

    LoggerService.getInstance().debug({
      context: this._serviceName,
      message: LoggerService.getInstance().getValueUpdateWithHint(
        `chalk color level: `,
        _.toString(chalkLevel),
        ` (${this._getHumanizedColorLevel(chalkLevel)})`
      ),
    });
  }

  private _getHumanizedColorLevel(chalkLevel: Readonly<chalk.Level>): string | never {
    if (_.gte(chalkLevel, MINIMUM_CHALK_LEVEL) && _.lte(chalkLevel, MAXIMUM_CHALK_LEVEL)) {
      return CHALK_LEVELS_HUMANIZED[chalkLevel];
    }

    throw new Error(`The given chalk level should be between 0 and 3`);
  }
}
