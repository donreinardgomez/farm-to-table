export interface IConsumer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  greenPoints?: number;
  phoneNmber?: string;
  address?: string;
  walletPoints?: number;
  attributes?: {
    height?: number;
    weight?: number;
    gender?: 'male' | 'female';
    birthDate?: Date;
  };
  badge?: 'none' | 'bronze' | 'silver' | 'gold' | 'platinum';
}
