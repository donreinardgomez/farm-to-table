import { IStore } from '@models/store';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './style.scss';

const FakeARFC: React.FC<Props> = ({}) => {
  return <div className={styles.image}>FAKE AR PHOTO</div>;
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

export const FakeAR = compose(connect(mapStateToProps, mapDispatchToProps))(FakeARFC);
