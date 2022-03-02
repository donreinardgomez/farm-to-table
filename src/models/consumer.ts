export interface IConsumer {
  firstName: string;
  lastName: string;
  email: string;
  greenPoints?: number;
  badge?: 'none' | 'bronze' | 'silver' | 'gold' | 'platinum';
}
