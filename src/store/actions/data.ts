import { IConsumer } from '@models/consumer';
import { IManufacturer } from '@models/manufacturer';
import { Action } from 'redux';

interface ActionSetConsumers extends Action {
  consumers: IConsumer[];
  type: 'SET_CONSUMERS';
}

export const setConsumers = (consumers: IConsumer[]): ActionSetConsumers => ({
  consumers,
  type: 'SET_CONSUMERS',
});

interface ActionSetManufacturers extends Action {
  manufacturers: IManufacturer[];
  type: 'SET_MANUFACTURERS';
}

export const setManufacturers = (manufacturers: IManufacturer[]): ActionSetManufacturers => ({
  manufacturers,
  type: 'SET_MANUFACTURERS',
});

export type DataActions = ActionSetConsumers | ActionSetManufacturers;
