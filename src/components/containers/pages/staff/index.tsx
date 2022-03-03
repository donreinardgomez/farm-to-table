import { IGraphConfig } from '@models/graph-config';
import { IStore } from '@models/store';
import { LineGraph } from '@visuals/line-graph';
import { Logo } from '@visuals/logo';
import { MoodEmoji } from '@visuals/mood';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './style.scss';

const StaffFC: React.FC<Props> = ({
  state: {
    ui: { displayStaff: staff },
  },
}) => {
  const workingHours: IGraphConfig = {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    series: [
      {
        type: 'line',
        name: '2020',
        data: [180, 200, 240, 160, 124, 124, 125, 175, 123, 122, 108, 111],
      },
      {
        type: 'line',
        name: '2021',
        data: [120, 201, 222, 331, 333, 455, 112, 322, 433, 112, 123, 446],
      },
      {
        type: 'line',
        name: '2022',
        data: [220, 101, 122, 133, 112, 444, 132, 422, 233, 412, 223, 346],
      },
    ],
  };

  const stressRating: IGraphConfig = {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    series: [
      {
        type: 'line',
        name: '2022',
        data: [0.33, 0.25, 0.5, 0.25, 0.11, 0.45, 0.753, 0.23, 0.92, 0.75, 0.8, 0.97],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.topHalf}>
        <div className={styles.moodContainer}>
          <MoodEmoji className={styles.mood} mood={staff.moodRating} />
        </div>
        <div>
          <TextDisplay size='summary-large' weight='bold'>
            {staff.firstName} {staff.lastName}
          </TextDisplay>
        </div>
      </div>
      <div className={styles.avatarContainer}>
        <Logo className={styles.avatar} type={staff.avatar} />
      </div>
      <div className={styles.bottomHalf}>
        <div className={styles.additionalInfoContainer}>
          <TextDisplay color='gray-1' size='small' weight='bold'>
            {staff.address}
          </TextDisplay>
          <TextDisplay color='gray-2' size='x-small'>
            {staff.phoneNmber}
          </TextDisplay>
          <TextDisplay color='gray-2' size='x-small'>
            {staff.email}
          </TextDisplay>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <TextDisplay size='xx-large' color='white'>
          Working Hours
        </TextDisplay>
        <div className={styles.graphContainer}>
          <LineGraph graphConfig={workingHours} />
        </div>
        <TextDisplay size='xx-large' color='white'>
          Stress Level
        </TextDisplay>
        <div className={styles.graphContainer}>
          <LineGraph graphConfig={stressRating} />
        </div>
      </div>
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  state: IStore;
}

interface IDispatchProps {}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {};

export const Staff = compose(connect(mapStateToProps, mapDispatchToProps))(StaffFC);
