import { IData } from '@models/data';
import { AllAction } from '@store/actions';
import { updateObject } from '@utils/update-object';

const initialState: IData = {
  consumers: [],
  manufacturers: [],
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
