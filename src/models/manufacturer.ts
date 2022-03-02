export interface IManufacturer {
  name: string;
  address?: string;
  rating?: number;
  badge?: 'none' | 'bronze' | 'silver' | 'gold';
  aiFeedback: string;
}
