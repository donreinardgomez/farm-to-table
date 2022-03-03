import { IConsumer } from './consumer';
import { IItem } from './item';
import { IManufacturer } from './manufacturer';

export interface IUi {
  displayConsumer: IConsumer;
  displayItem: IItem;
  displayManufacturer: IManufacturer;
  isMenuOn: boolean;
  isAppHeaderSimple: boolean;
}
