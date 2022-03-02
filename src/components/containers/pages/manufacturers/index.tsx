import { setConsumers, setManufacturers } from '@actions/data';
import { setDisplayConsumer, setDisplayManufacturer } from '@actions/ui';
import { IConsumer } from '@models/consumer';
import { IManufacturer } from '@models/manufacturer';
import { IStore } from '@models/store';
import { isEven } from '@utils/is-even';
import { ManufacturerRow } from '@visuals/manufacturer-row';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './style.scss';

const ManufacturersFC: React.FC<Props> = ({
  state: {
    data: { manufacturers },
  },
}) => {
  return (
    <div className={styles.table}>
      {manufacturers.map((manufacturer, i) => (
        <ManufacturerRow
          className={styles.row}
          type={isEven(i + 1) ? 'even' : 'odd'}
          key={i}
          manufacturer={manufacturer}
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
  setConsumers: (consumers: IConsumer[]) => void;
  setManufacturers: (manufacturers: IManufacturer[]) => void;
  setDisplayConsumer: (consumer: IConsumer) => void;
  setDisplayManufacturer: (manufacturer: IManufacturer) => void;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {
  setConsumers,
  setManufacturers,
  setDisplayConsumer,
  setDisplayManufacturer,
};

export const Manufacturers = compose(connect(mapStateToProps, mapDispatchToProps))(ManufacturersFC);
