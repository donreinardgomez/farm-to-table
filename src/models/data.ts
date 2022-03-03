import { IConsumer } from './consumer';
import { IItem } from './item';
import { IManufacturer } from './manufacturer';
import { IPurchaseItem } from './purchased-item';

export interface IData {
  consumers: IConsumer[];
  manufacturers: IManufacturer[];
  purchasedItems: IPurchaseItem[];
  items: IItem[];
}
