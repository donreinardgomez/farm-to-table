import { IConsumer } from './consumer';
import { IManufacturer } from './manufacturer';

export interface IData {
  consumers: IConsumer[];
  manufacturers: IManufacturer[];
}
