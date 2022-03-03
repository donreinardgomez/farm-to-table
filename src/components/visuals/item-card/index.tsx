import { Spa } from '@material-ui/icons';
import { IItem } from '@models/item';
import { formatNumber } from '@utils/format-number';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export const ItemCard: React.FC<Props> = ({ item, onClick, className }) => {
  return (
    <div className={`${styles.card} ${className}`} onClick={onClick}>
      <img className={styles.image} src={item.image} />
      <div className={styles.labelContainer}>
        <TextDisplay truncate='ellipsis' size='small'>
          {item.name}
        </TextDisplay>
        <TextDisplay color='alert' size='x-small'>
          {formatNumber(item.price)}円
        </TextDisplay>
        <TextDisplay color='green-3' size='x-small'>
          <Spa className={styles.leaf} />
          {formatNumber(item.greenPoint)}
        </TextDisplay>
      </div>
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  item: IItem;
  className?: string;
}

interface IDispatchProps {
  onClick?: () => void;
}
