import { IUi } from '@models/ui';
import { AllAction } from '@store/actions';
import { dummyConsumers } from '@store/dummy/consumers';
import { generateDummyItem } from '@store/dummy/item-pool';
import { dummyManufacturers } from '@store/dummy/manufacturer';
import { dummyStaffs } from '@store/dummy/staffs';
import { updateObject } from '@utils/update-object';

const initialState: IUi = {
  displayConsumer: dummyConsumers[3],
  displayItem: generateDummyItem(),
  displayManufacturer: dummyManufacturers[2],
  displayStaff: dummyStaffs[2],
  isMenuOn: false,
  isAppHeaderSimple: false,
};

export function ui(state: IUi = initialState, action: AllAction) {
  switch (action.type) {
    case 'SET_DISPLAY_CONSUMER':
      return updateObject(state, {
        displayConsumer: action.consumer,
      });
    case 'SET_DISPLAY_MANUFACTURER':
      return updateObject(state, {
        displayConsumer: action.manufacturer,
      });
    case 'SET_DISPLAY_ITEM':
      return updateObject(state, {
        displayItem: action.item,
      });
    case 'SET_DISPLAY_STAFF':
      return updateObject(state, {
        displayStaff: action.staff,
      });
    case 'TOGGLE_MENU':
      return updateObject(state, {
        isMenuOn: !state.isMenuOn,
      });
    case 'SET_APP_HEADER_SIMPLE':
      return updateObject(state, {
        isAppHeaderSimple: action.flag,
      });
    default:
      return state;
  }
}
