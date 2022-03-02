export interface IConsumer {
  name: string;
  email: string;
  greenPoints?: number;
  badge?: 'none' | 'bronze' | 'silver' | 'gold';
}
