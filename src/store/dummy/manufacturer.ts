import { IManufacturer } from '@models/manufacturer';
import { getRandom } from '@utils/get-random';
import { LoremIpsum } from 'lorem-ipsum';

const loremClass = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const dummyManufacturers: IManufacturer[] = [
  {
    name: 'Manufacturing Company 1',
    industry: 'Electrical Equipment, Appliances & Components',
    address: '123 Fake Street Fake Road Fake Country 1',
    rating: 1,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 2',
    industry: 'Textile Mills',
    address: '123 Fake Street Fake Road Fake Country 2',
    rating: 3,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 3',
    industry: 'Furniture & Related Products',
    address: '123 Fake Street Fake Road Fake Country 3',
    rating: 5,
    ranking: 1,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 4',
    industry: 'Machinery',
    address: '123 Fake Street Fake Road Fake Country 4',
    rating: 3,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 5',
    industry: 'Fabricated Metal Products',
    address: '123 Fake Street Fake Road Fake Country 5',
    rating: 5,
    ranking: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 6',
    industry: 'Primary Metals',
    address: '123 Fake Street Fake Road Fake Country 6',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 7',
    industry: 'Miscellaneous Manufacturing',
    address: '123 Fake Street Fake Road Fake Country 7',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 8',
    industry: 'Chemical Products',
    address: '123 Fake Street Fake Road Fake Country 8',
    rating: 4,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 9',
    industry: 'Plastics & Rubber Products',
    address: '123 Fake Street Fake Road Fake Country 9',
    rating: 5,
    ranking: 3,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 10',
    industry: 'Food, Beverage',
    address: '123 Fake Street Fake Road Fake Country 10',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 11',
    industry: 'Electrical Equipment, Appliances & Components',
    address: '123 Fake Street Fake Road Fake Country 11',
    rating: 4,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 12',
    industry: 'Textile Mills',
    address: '123 Fake Street Fake Road Fake Country 12',
    rating: 1,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 13',
    industry: 'Furniture & Related Products',
    address: '123 Fake Street Fake Road Fake Country 13',
    rating: 3,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 14',
    industry: 'Machinery',
    address: '123 Fake Street Fake Road Fake Country 14',
    rating: 4,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 15',
    industry: 'Fabricated Metal Products',
    address: '123 Fake Street Fake Road Fake Country 15',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 16',
    industry: 'Primary Metals',
    address: '123 Fake Street Fake Road Fake Country 16',
    rating: 1,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 17',
    industry: 'Miscellaneous Manufacturing',
    address: '123 Fake Street Fake Road Fake Country 17',
    rating: 3,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 18',
    industry: 'Chemical Products',
    address: '123 Fake Street Fake Road Fake Country 18',
    rating: 5,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 19',
    industry: 'Plastics & Rubber Products',
    address: '123 Fake Street Fake Road Fake Country 19',
    rating: 5,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 20',
    industry: 'Food, Beverage',
    address: '123 Fake Street Fake Road Fake Country 20',
    rating: 1,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 21',
    industry: 'Electrical Equipment, Appliances & Components',
    address: '123 Fake Street Fake Road Fake Country 21',
    rating: 1,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 22',
    industry: 'Textile Mills',
    address: '123 Fake Street Fake Road Fake Country 22',
    rating: 3,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 23',
    industry: 'Furniture & Related Products',
    address: '123 Fake Street Fake Road Fake Country 23',
    rating: 4,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 24',
    industry: 'Machinery',
    address: '123 Fake Street Fake Road Fake Country 24',
    rating: 5,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 25',
    industry: 'Fabricated Metal Products',
    address: '123 Fake Street Fake Road Fake Country 25',
    rating: 5,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 26',
    industry: 'Primary Metals',
    address: '123 Fake Street Fake Road Fake Country 26',
    rating: 5,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 27',
    industry: 'Miscellaneous Manufacturing',
    address: '123 Fake Street Fake Road Fake Country 27',
    rating: 3,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 28',
    industry: 'Chemical Products',
    address: '123 Fake Street Fake Road Fake Country 28',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 29',
    industry: 'Plastics & Rubber Products',
    address: '123 Fake Street Fake Road Fake Country 29',
    rating: 4,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 30',
    industry: 'Food, Beverage',
    address: '123 Fake Street Fake Road Fake Country 30',
    rating: 4,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 31',
    industry: 'Electrical Equipment, Appliances & Components',
    address: '123 Fake Street Fake Road Fake Country 31',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 32',
    industry: 'Textile Mills',
    address: '123 Fake Street Fake Road Fake Country 32',
    rating: 3,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 33',
    industry: 'Furniture & Related Products',
    address: '123 Fake Street Fake Road Fake Country 33',
    rating: 5,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 34',
    industry: 'Machinery',
    address: '123 Fake Street Fake Road Fake Country 34',
    rating: 4,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 35',
    industry: 'Fabricated Metal Products',
    address: '123 Fake Street Fake Road Fake Country 35',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 36',
    industry: 'Primary Metals',
    address: '123 Fake Street Fake Road Fake Country 36',
    rating: 3,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 37',
    industry: 'Miscellaneous Manufacturing',
    address: '123 Fake Street Fake Road Fake Country 37',
    rating: 4,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 38',
    industry: 'Chemical Products',
    address: '123 Fake Street Fake Road Fake Country 38',
    rating: 5,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 39',
    industry: 'Plastics & Rubber Products',
    address: '123 Fake Street Fake Road Fake Country 39',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 40',
    industry: 'Food, Beverage',
    address: '123 Fake Street Fake Road Fake Country 40',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 41',
    industry: 'Electrical Equipment, Appliances & Components',
    address: '123 Fake Street Fake Road Fake Country 41',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 42',
    industry: 'Textile Mills',
    address: '123 Fake Street Fake Road Fake Country 42',
    rating: 4,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 43',
    industry: 'Furniture & Related Products',
    address: '123 Fake Street Fake Road Fake Country 43',
    rating: 1,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 44',
    industry: 'Machinery',
    address: '123 Fake Street Fake Road Fake Country 44',
    rating: 3,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 45',
    industry: 'Fabricated Metal Products',
    address: '123 Fake Street Fake Road Fake Country 45',
    rating: 3,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 46',
    industry: 'Primary Metals',
    address: '123 Fake Street Fake Road Fake Country 46',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 47',
    industry: 'Miscellaneous Manufacturing',
    address: '123 Fake Street Fake Road Fake Country 47',
    rating: 4,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 48',
    industry: 'Chemical Products',
    address: '123 Fake Street Fake Road Fake Country 48',
    rating: 4,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 49',
    industry: 'Plastics & Rubber Products',
    address: '123 Fake Street Fake Road Fake Country 49',
    rating: 5,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
  {
    name: 'Manufacturing Company 50',
    industry: 'Food, Beverage',
    address: '123 Fake Street Fake Road Fake Country 50',
    rating: 2,
    thumbnail: `man-logo-${getRandom(20)}`,
    aiFeedback: loremClass.generateParagraphs(getRandom(5)),
  },
];
