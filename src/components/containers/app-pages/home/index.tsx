import { IStore } from '@models/store';
import { AppSectionHeader } from '@visuals/app-section-header';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const AppHomeFC: React.FC<Props> = ({}) => {
  return (
    <div>
      <AppSectionHeader>Features</AppSectionHeader>
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  state: IStore;
}

interface IDispatchProps {}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {};

export const AppHome = compose(connect(mapStateToProps, mapDispatchToProps))(AppHomeFC);
