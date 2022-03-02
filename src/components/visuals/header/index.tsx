import { IConsumer } from '@models/consumer';
import { IManufacturer } from '@models/manufacturer';
import { TPageType } from '@models/page-types';
import { Logo } from '@visuals/logo';
import React from 'react';
import styles from './style.scss';

export const Header: React.FC<Props> = () => {
  return (
    <div className={styles.header}>
      <Logo className={styles.logo} type='logo-header-mono' />
    </div>
  );
};

Header.defaultProps = {
  mode: 'dashboard',
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  greenPoints?: number;
  rating?: number;
  consumerInfo?: IConsumer;
  manufacturerInfo?: IManufacturer;
  mode?: TPageType;
}

interface IDispatchProps {}
