import { TPageType } from '@models/page-types';
import { Header } from '@visuals/header';
import React from 'react';
import styles from './style.scss';

export const PageContainer: React.FC<Props> = ({ children, onLogoClick, mode }) => {
  return (
    <div className={styles.pageContainer}>
      <Header onLogoClick={onLogoClick} mode={mode} />
      {children}
    </div>
  );
};

PageContainer.defaultProps = {
  mode: 'dashboard',
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  children: React.ReactNode;
  mode?: TPageType;
  onLogoClick?: () => void;
}

interface IDispatchProps {}
