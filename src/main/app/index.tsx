import { Layout } from '@containers/pages/layout';
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
          <Route exact component={Layout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
