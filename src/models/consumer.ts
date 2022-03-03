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
    height?: string;
    weight?: number;
    gender?: number;
    birthDate?: Date;
  };
  badge?: 'none' | 'bronze' | 'silver' | 'gold' | 'platinum';
}
