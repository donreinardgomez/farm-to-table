import { IConsumer } from './consumer';
import { IItem } from './item';
import { IManufacturer } from './manufacturer';
import { IStaff } from './staff';

export interface IUi {
  displayConsumer: IConsumer;
  displayItem: IItem;
  displayStaff: IStaff;
  displayManufacturer: IManufacturer;
  isMenuOn: boolean;
  isAppHeaderSimple: boolean;
}
