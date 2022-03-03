import { IData } from '@models/data';
import { AllAction } from '@store/actions';
import { dummyConsumers } from '@store/dummy/consumers';
import { generateDummyItems } from '@store/dummy/item-pool';
import { dummyManufacturers } from '@store/dummy/manufacturer';
import { generateDummyPurchasedItems } from '@store/dummy/purchased-items';
import { updateObject } from '@utils/update-object';

const initialState: IData = {
  consumers: [...dummyConsumers],
  manufacturers: [...dummyManufacturers],
  purchasedItems: generateDummyPurchasedItems(100),
  items: generateDummyItems(1000),
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
