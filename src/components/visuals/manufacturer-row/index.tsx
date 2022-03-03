import { Assistant } from '@material-ui/icons';
import { IManufacturer } from '@models/manufacturer';
import { TPageType } from '@models/page-types';
import { ManufacturerCard } from '@visuals/manufacturer-card';
import { TextDisplay } from '@visuals/text-display';
import React, { useState } from 'react';
import styles from './style.scss';

export const ManufacturerRow: React.FC<Props> = ({
  manufacturer,
  className,
  type,
  mode,
  onNameClick,
}) => {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  const toggleFeedbackVisibility = () => {
    setIsFeedbackVisible(!isFeedbackVisible);
  };

  return (
    <div className={`${styles.row} ${className}`}>
      <div className={`${styles.name} ${styles[type]}`}>
        <ManufacturerCard mode={mode} manufacturer={manufacturer} onClick={onNameClick} />
        <div className={styles.icon} onClick={toggleFeedbackVisibility}>
          {<Assistant className={isFeedbackVisible ? styles.iconActive : styles.iconInactive} />}
        </div>
      </div>
      {isFeedbackVisible && (
        <div className={styles.feedback}>
          <TextDisplay size='large' weight='bold'>
            Company Overview
          </TextDisplay>
          <TextDisplay className={styles.padBottom}>{manufacturer.overview}</TextDisplay>
          <TextDisplay size='large' weight='bold'>
            Review (AI Generated)
          </TextDisplay>
          <TextDisplay>{manufacturer.aiFeedback}</TextDisplay>
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

interface IDispatchProps {
  onNameClick?: () => void;
}
