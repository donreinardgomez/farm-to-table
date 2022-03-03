import { IUi } from '@models/ui';
import { AllAction } from '@store/actions';
import { dummyConsumers } from '@store/dummy/consumers';
import { updateObject } from '@utils/update-object';

const initialState: IUi = {
  displayConsumer: dummyConsumers[0],
  displayManufacturer: null,
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
