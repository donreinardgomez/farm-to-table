import { IStaff } from '@models/staff';
import { Logo } from '@visuals/logo';
import { MoodEmoji } from '@visuals/mood';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export const StaffRow: React.FC<Props> = ({ staff, className, type, onNameClick }) => {
  return (
    <div onClick={onNameClick} className={`${styles.row} ${styles[type]} ${className}`}>
      <div className={styles.nameSet}>
        <Logo className={styles.avatar} type={staff.avatar} />
        <TextDisplay className={styles.name} size='xx-large'>
          {staff.firstName} {staff.lastName}
        </TextDisplay>
      </div>
      <MoodEmoji mood={staff.moodRating} />
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
