import { setConsumers, setManufacturers } from '@actions/data';
import { setDisplayConsumer, setDisplayManufacturer } from '@actions/ui';
import { IConsumer } from '@models/consumer';
import { IManufacturer } from '@models/manufacturer';
import { IStore } from '@models/store';
import { PageContainer } from '@visuals/page-container';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { ManufacturerPage } from '../manufacturer-page';
import { Manufacturers } from '../manufacturers';

const DashboardFC: React.FC<Props> = () => {
  const history = useHistory();

  return (
    <PageContainer onLogoClick={() => history.push('/')}>
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
  setConsumers: (consumers: IConsumer[]) => void;
  setManufacturers: (manufacturers: IManufacturer[]) => void;
  setDisplayConsumer: (consumer: IConsumer) => void;
  setDisplayManufacturer: (manufacturer: IManufacturer) => void;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {
  setConsumers,
  setManufacturers,
  setDisplayConsumer,
  setDisplayManufacturer,
};

export const Dashboard = compose(connect(mapStateToProps, mapDispatchToProps))(DashboardFC);
