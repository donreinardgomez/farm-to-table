import { IConsumer } from './consumer';
import { IManufacturer } from './manufacturer';

export interface IUi {
  displayConsumer: IConsumer;
  displayManufacturer: IManufacturer;
  isMenuOn: boolean;
  isAppHeaderSimple: boolean;
}
