import { ConsumerApp } from '@containers/app-pages/consumer-app';
import { IStore } from '@models/store';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { Dashboard } from '../dashboard';

const LayoutFC: React.FC<Props> = ({}) => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Redirect to={'/biz'} />} />
      <Route path={'/app'} component={ConsumerApp} />
      <Route path={'/biz'} component={Dashboard} />
    </Switch>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  state: IStore;
}

interface IDispatchProps {
  toggleMenu: () => void;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

export const Layout = compose(connect(mapStateToProps))(LayoutFC);
