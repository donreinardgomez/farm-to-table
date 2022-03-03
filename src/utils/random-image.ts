import loremPicsum from 'lorem-picsum';
import { getRandomNumber } from './get-random';

export const getRandomPic = (width, height) =>
  loremPicsum({ width, height, image: getRandomNumber(100) });
