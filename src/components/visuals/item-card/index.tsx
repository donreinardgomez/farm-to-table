import { IItem } from '@models/item';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export const ItemCard: React.FC<Props> = ({ item, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <TextDisplay>{item.name}</TextDisplay>
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  item: IItem;
}

interface IDispatchProps {
  onClick?: () => void;
}
