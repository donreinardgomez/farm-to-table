import { IConsumer } from '@models/consumer';
import { IItem } from '@models/item';
import { IManufacturer } from '@models/manufacturer';
import { IStaff } from '@models/staff';
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

interface ActionSetDisplayItem extends Action {
  item: IItem;
  type: 'SET_DISPLAY_ITEM';
}

export const setDisplayItem = (item: IItem): ActionSetDisplayItem => ({
  item,
  type: 'SET_DISPLAY_ITEM',
});

interface ActionSetDisplayStaff extends Action {
  staff: IStaff;
  type: 'SET_DISPLAY_STAFF';
}

export const setDisplayStaff = (staff: IStaff): ActionSetDisplayStaff => ({
  staff,
  type: 'SET_DISPLAY_STAFF',
});

export type UiActions =
  | ActionSetDisplayConsumer
  | ActionSetDisplayManufacturer
  | ActionToggleMenu
  | ActionSetAppHeaderSimple
  | ActionSetDisplayItem
  | ActionSetDisplayStaff;
