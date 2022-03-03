import { TPageType } from '@models/page-types';
import { Logo } from '@visuals/logo';
import React from 'react';
import styles from './style.scss';

export const Header: React.FC<Props> = ({ onLogoClick }) => {
  return (
    <div className={`${styles.header} ${onLogoClick && styles.clickable}`}>
      <Logo onClick={onLogoClick} className={styles.logo} type='logo-header-mono' />
    </div>
  );
};

Header.defaultProps = {
  mode: 'dashboard',
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  mode?: TPageType;
  onLogoClick?: () => void;
}

interface IDispatchProps {}
