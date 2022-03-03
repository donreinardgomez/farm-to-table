import React from 'react';
import styles from './style.scss';

export class Logo extends React.PureComponent<Props> {
  public render(): JSX.Element {
    const { onClick, type, className } = this.props;
    return (
      <div
        className={`${styles.logo} ${styles[type]} ${onClick && styles.clickable} ${className}`}
        onClick={onClick}
      />
    );
  }
}

export type Props = IStateProps & IDispatchProps;

interface IDispatchProps {
  onClick?: () => void;
  className?: string;
}

interface IStateProps {
  type: Type | string;
}

export type Type =
  | 'analysis'
  | 'analysis-active'
  | 'comment'
  | 'comment-active'
  | 'company'
  | 'company-active'
  | 'dashboard'
  | 'dashboard-active'
  | 'data-input'
  | 'data-input-active'
  | 'dictionary'
  | 'dictionary-active'
  | 'format'
  | 'format-active'
  | 'fraud'
  | 'fraud-active'
  | 'graph'
  | 'graph-active'
  | 'home-active'
  | 'home'
  | 'tips'
  | 'tips-active'
  | 'tips2'
  | 'tips2-active'
  | 'man-logo-1'
  | 'man-logo-2'
  | 'man-logo-3'
  | 'man-logo-4'
  | 'man-logo-5'
  | 'man-logo-6'
  | 'man-logo-7'
  | 'man-logo-8'
  | 'man-logo-9'
  | 'man-logo-10'
  | 'man-logo-11'
  | 'man-logo-12'
  | 'man-logo-13'
  | 'man-logo-14'
  | 'man-logo-15'
  | 'man-logo-16'
  | 'man-logo-17'
  | 'man-logo-18'
  | 'man-logo-19'
  | 'man-logo-20'
  | 'logo-main'
  | 'logo-main-mono'
  | 'logo-header'
  | 'logo-header-mono'
  | 'avatar-joe'
  | 'avatar-mei'
  | 'avatar-suto'
  | 'avatar-nakayama'
  | 'avatar-min'
  | 'avatar-don';
