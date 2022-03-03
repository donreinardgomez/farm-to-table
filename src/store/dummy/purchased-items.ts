import { IPurchaseItem } from '@models/purchased-item';
import { getRandom } from '@utils/get-random';
import { getRandomDate } from '@utils/random-date';

export const generateDummyPurchasedItems = (total: number): IPurchaseItem[] => {
  if (total <= 0) return [];
  const purchasedItems: IPurchaseItem[] = [];
  for (let i = 0; i <= total; i++) {
    purchasedItems.push({
      consumerId: getRandom(6),
      itemId: getRandom(100),
      purchaseDate: getRandomDate(),
    });
  }
};
