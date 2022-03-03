import { IItem } from './item';

export interface IManufacturer {
  id: number;
  name: string;
  overview: string;
  industry: string;
  thumbnail?: string;
  address?: string;
  rating?: number;
  ranking?: number;
  items?: IItem[];
  aiFeedback?: string;
}
