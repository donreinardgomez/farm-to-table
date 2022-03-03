import { IItem } from '@models/item';
import { getRandomNumber } from '@utils/get-random';
import { getRandomPic } from '@utils/random-image';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const generateDummyItems = (total: number, manufacturerId?: number): IItem[] => {
  if (total <= 0) return [];
  const generatedItems: IItem[] = [];
  for (let i = 1; i <= total; i++) {
    generatedItems.push(generateDummyItem(manufacturerId));
  }
  return generatedItems;
};

export const generateDummyItem = (manufacturerId?: number): IItem => {
  return {
    id: getRandomNumber(10000),
    name: lorem.generateWords(2),
    description: lorem.generateSentences(20),
    greenPoint: getRandomNumber(200),
    image: getRandomPic(100, 100),
    type: lorem.generateWords(1),
    manufacturerId: manufacturerId || getRandomNumber(50),
    distributionHistory: [
      { name: `FARM ${getRandomNumber(100)}` },
      { name: lorem.generateWords(1) },
      { name: `Manufacturer Company ${getRandomNumber(50)}` },
      { name: 'Super Store' },
    ],
    price: getRandomNumber(100000),
    originCountry: lorem.generateWords(1),
  };
};
