import { IPurchaseItem } from '@models/purchased-item';
import { getRandomNumber } from '@utils/get-random';
import { getRandomDate } from '@utils/random-date';

export const generateDummyPurchasedItems = (
  total: number,
  consumerId?: number,
): IPurchaseItem[] => {
  if (total <= 0) return [];
  const purchasedItems: IPurchaseItem[] = [];
  for (let i = 0; i <= total; i++) {
    purchasedItems.push({
      consumerId: consumerId || getRandomNumber(6),
      itemId: getRandomNumber(100),
      purchaseDate: getRandomDate(),
    });
  }

  return purchasedItems;
};
