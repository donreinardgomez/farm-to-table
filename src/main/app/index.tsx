import { ConsumerApp } from '@containers/pages/consumer-app';
import { Dashboard } from '@containers/pages/dashboard';
import { Test } from '@containers/pages/test';
import { store } from '@store/index';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/test'} component={Test} />
          <Route exact path={'/app'} component={ConsumerApp} />
          <Route exact path={'/dashboard'} component={Dashboard} />
          <Route exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
