import { EmojiEventsRounded } from '@material-ui/icons';
import { IManufacturer } from '@models/manufacturer';
import { TPageType } from '@models/page-types';
import { isOk } from '@utils/is-ok';
import { Logo } from '@visuals/logo';
import { Rating } from '@visuals/rating';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export const ManufacturerCard: React.FC<Props> = ({ manufacturer, className, onClick }) => {
  const renderRank = () => {
    if (!isOk(manufacturer.ranking)) return;
    return (
      <div className={styles.trophy}>
        <EmojiEventsRounded className={styles.trophyIcon} />
        <TextDisplay color='gray-3' className={styles.trophyRank} weight='bold' size='x-small'>
          {manufacturer.ranking}
        </TextDisplay>
      </div>
    );
  };

  return (
    <div className={`${styles.nameSet} ${className}`} onClick={onClick}>
      <Logo className={styles.logo} type={manufacturer.thumbnail} />
      <div>
        <TextDisplay weight='bold' size='large'>
          {manufacturer?.name}
        </TextDisplay>
        <Rating rating={manufacturer.rating} />
      </div>
      {renderRank()}
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

ManufacturerCard.defaultProps = {
  mode: 'dashboard',
};

interface IStateProps {
  manufacturer: IManufacturer;
  mode?: TPageType;
  className?: string;
}

interface IDispatchProps {
  onClick?: () => void;
}
