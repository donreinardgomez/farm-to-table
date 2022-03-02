import { setConsumers, setManufacturers } from '@actions/data';
import { setDisplayConsumer, setDisplayManufacturer } from '@actions/ui';
import { IConsumer } from '@models/consumer';
import { IManufacturer } from '@models/manufacturer';
import { IStore } from '@models/store';
import { Icon } from '@visuals/icon';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './style.scss';

const DashboardFC: React.FC<Props> = ({ state: { ui, data } }) => {
  return (
    <div className={styles.pageLayout}>
      <Icon type='eyedropper' />
      {JSON.stringify(ui)}
      {JSON.stringify(data)}
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

export const Dashboard = compose(connect(mapStateToProps, mapDispatchToProps))(DashboardFC);