import { setDisplayStaff } from '@actions/ui';
import { IStaff } from '@models/staff';
import { IStore } from '@models/store';
import { isEven } from '@utils/is-even';
import { StaffRow } from '@visuals/staff-row';
import hash from 'object-hash';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { compose } from 'redux';
import styles from './style.scss';

const StaffsFC: React.FC<Props> = ({
  state: {
    data: { staffs },
  },
  setDisplayStaff,
}) => {
  const history = useHistory();
  const handleNameClick = (staff: IStaff) => {
    setDisplayStaff(staff);
    history.push('/biz/staff');
  };

  return (
    <div className={styles.staffList}>
      {staffs.map((staff, i) => (
        <StaffRow
          type={isEven(i) ? 'even' : 'odd'}
          className={styles.row}
          staff={staff}
          key={hash(i)}
          onNameClick={() => handleNameClick(staff)}
        />
      ))}
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  state: IStore;
}

interface IDispatchProps {
  setDisplayStaff: (staff: IStaff) => void;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = { setDisplayStaff };

export const Staffs = compose(connect(mapStateToProps, mapDispatchToProps))(StaffsFC);
