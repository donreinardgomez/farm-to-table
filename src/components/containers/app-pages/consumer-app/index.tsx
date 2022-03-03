import { toggleMenu } from '@actions/ui';
import { IStore } from '@models/store';
import { AppHeader } from '@visuals/app-header';
import { PageContainer } from '@visuals/page-container';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { AppHome } from '../home';
import { PurchaseHistory } from '../purchase-history';

const ConsumerAppFC: React.FC<Props> = ({
  state: {
    ui: { isMenuOn, displayConsumer },
  },
  toggleMenu,
}) => {
  const history = useHistory();
  document.body.style.backgroundColor = '#f5f7f9';
  const { path } = useRouteMatch();

  return (
    <PageContainer mode='app' isMenuOn={isMenuOn} onLogoClick={() => history.push('/app')}>
      <AppHeader consumer={displayConsumer} onBurgerClick={toggleMenu} />
      <Switch>
        <Route exact path={path} component={AppHome} />
        <Route path={`${path}/hist`} component={PurchaseHistory} />
      </Switch>
    </PageContainer>
  );
};

export type Props = IStateProps & IDispatchProps & RouteComponentProps;

interface IStateProps {
  state: IStore;
}

interface IDispatchProps {
  toggleMenu: () => void;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {
  toggleMenu,
};

export const ConsumerApp = compose(connect(mapStateToProps, mapDispatchToProps))(ConsumerAppFC);
