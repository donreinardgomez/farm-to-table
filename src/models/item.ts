export interface IItem {
  id: number;
  name: string;
  description: string;
  image?: string;
  distributionHistory?: { name: string; coordinates?: { x: number; y: number } };
  type?: string;
  greenPoint?: number;
  originCountry: string;
}
