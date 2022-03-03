import { IItem } from './item';

export interface IManufacturer {
  id: number;
  name: string;
  overview: string;
  industry: string;
  thumbnail?: string;
  imageUrl?: string;
  address?: string;
  rating?: number;
  ranking?: number;
  items?: IItem[];
  aiFeedback?: string;
  awards?: string;
  description?: string;
  homepage?: string;
}
