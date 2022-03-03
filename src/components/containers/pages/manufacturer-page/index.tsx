import { IStore } from '@models/store';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';

const ManufacturerPageFC: React.FC<Props> = ({ state, match }) => {
  const targetManId = Number(match?.params['id']);
  const displayManufacturer = state?.data?.manufacturers.find((man) => man.id === targetManId);
  return (
    <div>
      <div>{JSON.stringify(displayManufacturer)}</div>
      <div>Items</div>
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
