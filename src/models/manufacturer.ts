import { IItem } from './item';

export interface IManufacturer {
  name: string;
  industry: string;
  thumbnail?: string;
  address?: string;
  rating?: number;
  items?: IItem[];
  aiFeedback?: string;
}
