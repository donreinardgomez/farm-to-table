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

interface ActionToggleMenu extends Action {
  type: 'TOGGLE_MENU';
}

export const toggleMenu = (): ActionToggleMenu => ({
  type: 'TOGGLE_MENU',
});

interface ActionSetAppHeaderSimple extends Action {
  flag: boolean;
  type: 'SET_APP_HEADER_SIMPLE';
}

export const setAppHeaderSimple = (flag): ActionSetAppHeaderSimple => ({
  flag,
  type: 'SET_APP_HEADER_SIMPLE',
});

export type UiActions =
  | ActionSetDisplayConsumer
  | ActionSetDisplayManufacturer
  | ActionToggleMenu
  | ActionSetAppHeaderSimple;
