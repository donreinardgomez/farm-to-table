import { IUi } from '@models/ui';
import { AllAction } from '@store/actions';
import { dummyConsumers } from '@store/dummy/consumers';
import { updateObject } from '@utils/update-object';

const initialState: IUi = {
  displayConsumer: dummyConsumers[3],
  displayManufacturer: null,
  isMenuOn: false,
};

export function ui(state: IUi = initialState, action: AllAction) {
  switch (action.type) {
    case 'SET_DISPLAY_CONSUMER':
      return updateObject(state, {
        displayConsumer: state.displayConsumer,
      });
    case 'SET_DISPLAY_MANUFACTURER':
      return updateObject(state, {
        displayConsumer: state.displayConsumer,
      });
    case 'TOGGLE_MENU':
      return updateObject(state, {
        isMenuOn: !state.isMenuOn,
      });
    default:
      return state;
  }
}
