import { IItem } from '@models/item';
import { getRandomNumber } from '@utils/get-random';

export const dummyItemsForManufacturer1: IItem[] = [
  {
    id: 1,
    description: 'This organic fruit grows up in the sunny florida',
    name: 'Organic Orange',
    originCountry: 'USA',
    greenPoint: 100,
    price: 100,
    manufacturerId: getRandomNumber(50),
  },
  {
    id: 2,
    description: 'This organic fruit grows up in the foggy plateau in middle Argentina',
    name: 'Organic Cabbage',
    originCountry: 'Argentina',
    greenPoint: 200,
    price: 200,
    manufacturerId: getRandomNumber(50),
  },
  {
    id: 3,
    description: 'This organic fruit grows up in the rainy mountain areas in south Thailand',
    name: 'Organic Tea',
    originCountry: 'Thailand',
    greenPoint: 300,
    price: 300,
    manufacturerId: getRandomNumber(50),
  },
];

export const dummyItemsForManufacturer2: IItem[] = [
  {
    id: 1,
    description:
      'This Tuna comes from Sweden by seaship, with trackable cold-chain records all the way to your hands',
    name: 'Frozen Tuna',
    originCountry: 'Sweden',
    greenPoint: 3000,
    price: 3000,
    manufacturerId: getRandomNumber(50),
  },
  {
    id: 2,
    description:
      'This Tuna comes from Iceland by airline, with trackable cold-chain records all the way to your hands',
    name: 'Fresh Tuna',
    originCountry: 'Iceland',
    greenPoint: 6000,
    price: 6000,
    manufacturerId: getRandomNumber(50),
  },
  {
    id: 3,
    description:
      'This Tuna comes from Russia by roadway, with trackable cold-chain records all the way to your hands',
    name: 'Frozen Tuna',
    originCountry: 'Russia',
    greenPoint: 2000,
    price: 2000,
    manufacturerId: getRandomNumber(50),
  },
];

export const dummyItemsForManufacturer3: IItem[] = [
  {
    id: 1,
    description: 'This chicken grows up in the open farm and feed up with natual food only',
    name: 'Frozen Chicken',
    originCountry: 'Ukraine',
    greenPoint: 2000,
    price: 2000,
    manufacturerId: getRandomNumber(50),
  },
  {
    id: 2,
    description: 'This lamb grows up in the open farm and feed up with natual food only',
    name: 'Fresh Lamb chops',
    originCountry: 'New Zealand',
    greenPoint: 4000,
    price: 4000,
    manufacturerId: getRandomNumber(50),
  },
  {
    id: 3,
    description: 'This pig grows up in the open farm and feed up with natual food only',
    name: 'Frozen Pork',
    originCountry: 'France',
    greenPoint: 4000,
    price: 4000,
    manufacturerId: getRandomNumber(50),
  },
];

export const dummyItemsForManufacturer4: IItem[] = [
  {
    id: 1,
    description: 'Top 4A-ranked beaf from Hokkaido Japan',
    name: 'Wanyu-Beaf 4A',
    originCountry: 'Japan',
    greenPoint: 7000,
    price: 7000,
    manufacturerId: getRandomNumber(50),
  },
  {
    id: 2,
    description: 'Top 4A-ranked beaf from Okinawa Japan',
    name: 'Wanyu-Beaf 4A',
    originCountry: 'Japan',
    greenPoint: 6000,
    price: 6000,
    manufacturerId: getRandomNumber(50),
  },
  {
    id: 3,
    description: 'Top 3A-ranked beaf from Saitama Japan',
    name: 'Wanyu-Beaf 3A',
    originCountry: 'Japan',
    greenPoint: 5000,
    price: 5000,
    manufacturerId: getRandomNumber(50),
  },
];

export const dummyItemsForManufacturer5: IItem[] = [
  {
    id: 1,
    description: 'Top 5A-ranked mongo from Miyazaki Japan',
    name: 'mongo 5A',
    originCountry: 'Japan',
    greenPoint: 9000,
    price: 9000,
    manufacturerId: getRandomNumber(50),
  },
  {
    id: 2,
    description: 'Top 4A-ranked mongo from Miyazaki Japan',
    name: 'mongo 5A',
    originCountry: 'Japan',
    greenPoint: 8000,
    price: 8000,
    manufacturerId: getRandomNumber(50),
  },
  {
    id: 3,
    description: 'Top 3A-ranked mongo from Miyazaki Japan',
    name: 'mongo 5A',
    originCountry: 'Japan',
    greenPoint: 7000,
    price: 7000,
    manufacturerId: getRandomNumber(50),
  },
];
