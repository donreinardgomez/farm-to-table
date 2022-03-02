import { IUi } from '@models/ui';
import { AllAction } from '@store/actions';
import { updateObject } from '@utils/update-object';

const initialState: IUi = {
  displayConsumer: null,
  displayManufacturer: null,
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
    default:
      return state;
  }
}
