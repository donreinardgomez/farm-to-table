export interface IStaff {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  moodRating: TMoodRating;
  phoneNmber?: string;
  address?: string;
}

export type TMoodRating = 'normal' | 'sad' | 'happy' | 'stressed' | 'angry';
