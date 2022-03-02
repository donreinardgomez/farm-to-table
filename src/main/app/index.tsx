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
          <Route path={'/test'} component={Test} />
          <Route path={'/'} component={Dashboard} />
          <Route path={'/dashboard'} component={Dashboard} />
          <Route path={'/app'} component={ConsumerApp} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
