import { toggleMenu } from '@actions/ui';
import { IStore } from '@models/store';
import { dummyMenuItems } from '@store/dummy/menu-items';
import { PageContainer } from '@visuals/page-container';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { ManufacturerPage } from '../manufacturer-page';
import { Manufacturers } from '../manufacturers';
import { Staff } from '../staff';
import { Staffs } from '../staff-list';

const DashboardFC: React.FC<Props> = ({
  state: {
    ui: { isMenuOn },
  },
  toggleMenu,
}) => {
  const history = useHistory();
  const { path } = useRouteMatch();
  document.body.style.backgroundColor = '#1b1b1b';
  return (
    <PageContainer
      onBurgerClick={toggleMenu}
      isMenuOn={isMenuOn}
      onLogoClick={() => history.push('/')}
      menuItems={dummyMenuItems}
    >
      <Switch>
        <Route exact path={path} component={Manufacturers} />
        <Route exact path={`${path}/manufacturer/:id`} component={ManufacturerPage} />
        <Route exact path={`${path}/staffs`} component={Staffs} />
        <Route exact path={`${path}/staff`} component={Staff} />
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
