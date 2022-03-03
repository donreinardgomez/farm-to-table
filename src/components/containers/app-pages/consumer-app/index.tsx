import { setAppHeaderSimple, toggleMenu } from '@actions/ui';
import { IStore } from '@models/store';
import { AppHeader } from '@visuals/app-header';
import { PageContainer } from '@visuals/page-container';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { AppHome } from '../home';
import { ItemPage } from '../item-page';

const ConsumerAppFC: React.FC<Props> = ({
  state: {
    ui: { isMenuOn, displayConsumer, isAppHeaderSimple },
  },
  toggleMenu,
  setAppHeaderSimple,
}) => {
  const history = useHistory();
  document.body.style.backgroundColor = '#f5f7f9';
  const { path } = useRouteMatch();

  const handleCameraClick = () => {
    history.push('/fake-ar');
  };

  const handleLogoClick = () => {
    history.push('/app');
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/app/item' && !isAppHeaderSimple) {
      setAppHeaderSimple(true);
    } else {
      setAppHeaderSimple(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <PageContainer mode='app' isMenuOn={isMenuOn} onLogoClick={() => history.push('/app')}>
      <AppHeader
        isSimple={isAppHeaderSimple}
        consumer={displayConsumer}
        onCameraClick={handleCameraClick}
        onBurgerClick={toggleMenu}
        onLogoClick={handleLogoClick}
      />
      <Switch>
        <Route exact path={path} component={AppHome} />
        <Route path={`${path}/item`} component={ItemPage} />
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
  setAppHeaderSimple: (flag: boolean) => void;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {
  toggleMenu,
  setAppHeaderSimple,
};

export const ConsumerApp = compose(connect(mapStateToProps, mapDispatchToProps))(ConsumerAppFC);
