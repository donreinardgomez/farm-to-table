import { IData } from '@models/data';
import { AllAction } from '@store/actions';
import { dummyConsumers } from '@store/dummy/consumers';
import { dummyManufacturers } from '@store/dummy/manufacturer';
import { updateObject } from '@utils/update-object';

const initialState: IData = {
  consumers: [...dummyConsumers],
  manufacturers: [...dummyManufacturers],
};

export function data(state: IData = initialState, action: AllAction) {
  switch (action.type) {
    case 'SET_CONSUMERS':
      return updateObject(state, {
        consumers: state.consumers,
      });
    case 'SET_MANUFACTURERS':
      return updateObject(state, {
        manufacturers: state.manufacturers,
      });
    default:
      return state;
  }
}
