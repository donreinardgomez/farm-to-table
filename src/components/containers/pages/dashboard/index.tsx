import { toggleMenu } from '@actions/ui';
import { IStore } from '@models/store';
import { dummyMenuItems } from '@store/dummy/menu-items';
import { PageContainer } from '@visuals/page-container';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { ManufacturerPage } from '../manufacturer-page';
import { Manufacturers } from '../manufacturers';

const DashboardFC: React.FC<Props> = ({
  state: {
    ui: { isMenuOn },
  },
  toggleMenu,
}) => {
  const history = useHistory();

  return (
    <PageContainer
      onBurgerClick={toggleMenu}
      isMenuOn={isMenuOn}
      onLogoClick={() => history.push('/')}
      menuItems={dummyMenuItems}
    >
      <Switch>
        <Route exact path='/' render={() => <Redirect to={'/home'} />} />
        <Route exact path={'/manufacturer/:id'} component={ManufacturerPage} />
        <Route exact path={'/home'} component={Manufacturers} />
      </Switch>
    </PageContainer>
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

const mapDispatchToProps: IDispatchProps = {
  toggleMenu,
};

export const Dashboard = compose(connect(mapStateToProps, mapDispatchToProps))(DashboardFC);
