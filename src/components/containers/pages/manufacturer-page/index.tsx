import { IStore } from '@models/store';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import styles from './style.scss';

const ManufacturerPageFC: React.FC<Props> = ({ state, match }) => {
  const targetManId = Number(match?.params['id']);
  const displayManufacturer = state?.data?.manufacturers.find((man) => man.id === targetManId);
  return (
    <div className={styles.container}>
      <TextDisplay size='large' weight='bold'>
        INFO
      </TextDisplay>
      <div>
        <TextDisplay weight='bold'>Name:</TextDisplay>
        <TextDisplay weight='bold'>{displayManufacturer.name}</TextDisplay>
      </div>
      <TextDisplay size='large' weight='bold'>
        ITEM
      </TextDisplay>
    </div>
  );
};

export type Props = IStateProps & IDispatchProps & RouteComponentProps;

interface IStateProps {
  state: IStore;
}

interface IDispatchProps {}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {};

export const ManufacturerPage = compose(connect(mapStateToProps, mapDispatchToProps))(
  ManufacturerPageFC,
);
