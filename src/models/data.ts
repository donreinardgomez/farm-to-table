import { IConsumer } from './consumer';
import { IItem } from './item';
import { IManufacturer } from './manufacturer';
import { IPurchaseItem } from './purchased-item';
import { IStaff } from './staff';

export interface IData {
  consumers: IConsumer[];
  manufacturers: IManufacturer[];
  purchasedItems: IPurchaseItem[];
  staffs: IStaff[];
  items: IItem[];
}
