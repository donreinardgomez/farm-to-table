import { IMenuItem } from '@models/menu-item';
import { TPageType } from '@models/page-types';
import { Header } from '@visuals/header';
import { Menu } from '@visuals/menu';
import React from 'react';
import styles from './style.scss';

export const PageContainer: React.FC<Props> = ({
  children,
  onLogoClick,
  onBurgerClick,
  isMenuOn,
  menuItems,
  mode,
}) => {
  return (
    <div className={`${styles.pageContainer} ${styles[`mode-${mode}`]}`}>
      {mode === 'dashboard' && (
        <Header onLogoClick={onLogoClick} mode={mode} onBurgerClick={onBurgerClick} />
      )}
      <div className={styles.contentsContainer}>
        <div className={styles.contents}>{children}</div>
        {isMenuOn && mode === 'dashboard' && <Menu menuItems={menuItems} />}
      </div>
    </div>
  );
};

PageContainer.defaultProps = {
  mode: 'dashboard',
  isMenuOn: false,
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  isMenuOn?: boolean;
  children: React.ReactNode;
  mode?: TPageType;
  onLogoClick?: () => void;
  onBurgerClick?: () => void;
  menuItems?: IMenuItem[];
}

interface IDispatchProps {}
