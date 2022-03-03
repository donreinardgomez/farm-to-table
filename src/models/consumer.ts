export interface IConsumer {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  greenPoints?: number;
  phoneNmber?: string;
  address?: string;
  badge?: 'none' | 'bronze' | 'silver' | 'gold' | 'platinum';
}
