import { IItem } from '@models/item';
import { getRandom } from '@utils/get-random';
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

export const getDummyItemPool = (total: number): IItem[] => {
  if (total <= 0) return [];
  const generatedItems: IItem[] = [];
  for (let i = 1; i <= total; i++) {
    generatedItems.push({
      id: getRandom(10000),
      name: lorem.generateWords(2),
      description: lorem.generateSentences(1),
      greenPoint: getRandom(200),
      image: getRandomPic(200, 200),
      type: lorem.generateWords(1),
      distributionHistory: [
        { name: `FARM ${getRandom(100)}` },
        { name: lorem.generateWords(1) },
        { name: `Manufacturer Company ${getRandom(50)}` },
        { name: 'Super Store' },
      ],
    });
  }
};
