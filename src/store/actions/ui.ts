import { IConsumer } from '@models/consumer';
import { IManufacturer } from '@models/manufacturer';
import { Action } from 'redux';

interface ActionSetDisplayConsumer extends Action {
  consumer: IConsumer;
  type: 'SET_DISPLAY_CONSUMER';
}

export const setDisplayConsumer = (consumer: IConsumer): ActionSetDisplayConsumer => ({
  consumer,
  type: 'SET_DISPLAY_CONSUMER',
});

interface ActionSetDisplayManufacturer extends Action {
  manufacturer: IManufacturer;
  type: 'SET_DISPLAY_MANUFACTURER';
}

export const setDisplayManufacturer = (
  manufacturer: IManufacturer,
): ActionSetDisplayManufacturer => ({
  manufacturer,
  type: 'SET_DISPLAY_MANUFACTURER',
});

export type UiActions = ActionSetDisplayConsumer | ActionSetDisplayManufacturer;
