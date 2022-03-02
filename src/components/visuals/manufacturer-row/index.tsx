import { Assistant, EmojiEventsRounded } from '@material-ui/icons';
import { IManufacturer } from '@models/manufacturer';
import { TPageType } from '@models/page-types';
import { isOk } from '@utils/is-ok';
import { Logo } from '@visuals/logo';
import { Rating } from '@visuals/rating';
import { TextDisplay } from '@visuals/text-display';
import React, { useState } from 'react';
import styles from './style.scss';

export const ManufacturerRow: React.FC<Props> = ({ manufacturer, className, type }) => {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const toggleFeedbackVisibility = () => {
    setIsFeedbackVisible(!isFeedbackVisible);
  };

  const renderRank = () => {
    if (!isOk(manufacturer.ranking)) return;
    return (
      <div className={styles.trophy}>
        <EmojiEventsRounded className={styles.trophyIcon} />
        <TextDisplay color='gray-2' className={styles.trophyRank} weight='bold' size='x-small'>
          {manufacturer.ranking}
        </TextDisplay>
      </div>
    );
  };
  return (
    <div className={`${styles.row} ${className}`}>
      <div className={`${styles.name} ${styles[type]}`}>
        <div className={styles.nameSet}>
          <Logo className={styles.logo} type={manufacturer.thumbnail} />
          <div>
            <TextDisplay weight='bold' size='x-large'>
              {manufacturer?.name}
            </TextDisplay>
            <Rating rating={manufacturer.rating} />
          </div>
          {renderRank()}
        </div>
        <div className={styles.icon} onClick={toggleFeedbackVisibility}>
          {<Assistant className={isFeedbackVisible ? styles.iconActive : styles.iconInactive} />}
        </div>
      </div>
      {isFeedbackVisible && (
        <div className={styles.feedback}>
          <div dangerouslySetInnerHTML={{ __html: manufacturer.aiFeedback }} />
        </div>
      )}
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

ManufacturerRow.defaultProps = {
  type: 'odd',
  mode: 'dashboard',
};

interface IStateProps {
  manufacturer: IManufacturer;
  type?: 'odd' | 'even';
  mode?: TPageType;
  className?: string;
}

interface IDispatchProps {}
