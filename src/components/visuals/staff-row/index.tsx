import {
  Face,
  Mood,
  MoodBad,
  SentimentDissatisfiedOutlined,
  SentimentSatisfied,
} from '@material-ui/icons';
import { IStaff } from '@models/staff';
import { Logo } from '@visuals/logo';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export const StaffRow: React.FC<Props> = ({ staff, className, type, onNameClick }) => {
  const renderMood = () => {
    switch (staff.moodRating) {
      case 'happy':
        return <Mood />;
      case 'angry':
        return <MoodBad />;
      case 'stressed':
        return <Face />;
      case 'normal':
        return <SentimentSatisfied />;
      case 'sad':
        return <SentimentDissatisfiedOutlined />;
    }
  };

  return (
    <div onClick={onNameClick} className={`${styles.row} ${styles[type]} ${className}`}>
      <div className={styles.nameSet}>
        <Logo className={styles.avatar} type={staff.avatar} />
        <TextDisplay className={styles.name} size='xx-large'>
          {staff.firstName} {staff.lastName}
        </TextDisplay>
      </div>
      {renderMood()}
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

StaffRow.defaultProps = {
  type: 'odd',
};

interface IStateProps {
  staff: IStaff;
  type?: 'odd' | 'even';
  className?: string;
}

interface IDispatchProps {
  onNameClick?: () => void;
}
