import { Menu } from '@material-ui/icons';
import { TPageType } from '@models/page-types';
import { Logo } from '@visuals/logo';
import React from 'react';
import styles from './style.scss';

export const Header: React.FC<Props> = ({ onLogoClick, onBurgerClick }) => {
  return (
    <div className={`${styles.header} ${onLogoClick && styles.clickable}`}>
      <Logo onClick={onLogoClick} className={styles.logo} type='logo-header-mono' />
      <Menu onClick={onBurgerClick} className={styles.burger} />
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
  onBurgerClick?: () => void;
}

interface IDispatchProps {}
