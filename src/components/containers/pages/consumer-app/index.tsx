import { IStore } from '@models/store';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';

const ConsumerAppFC: React.FC<Props> = () => {
  return <>APP</>;
};

export type Props = IStateProps & RouteComponentProps;

interface IStateProps {
  state: IStore;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

export const ConsumerApp = compose(connect(mapStateToProps))(ConsumerAppFC);
