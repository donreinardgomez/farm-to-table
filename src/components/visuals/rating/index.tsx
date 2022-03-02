import { Spa } from '@material-ui/icons';
import React from 'react';
import styles from './style.scss';

export const Rating: React.FC<Props> = ({ rating, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Spa className={`${styles.icon} ${rating > 0 && styles.iconActive}`} />
      <Spa className={`${styles.icon} ${rating > 1 && styles.iconActive}`} />
      <Spa className={`${styles.icon} ${rating > 2 && styles.iconActive}`} />
      <Spa className={`${styles.icon} ${rating > 3 && styles.iconActive}`} />
      <Spa className={`${styles.icon} ${rating > 4 && styles.iconActive}`} />
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  rating: number;
  className?: string;
}

interface IDispatchProps {}
