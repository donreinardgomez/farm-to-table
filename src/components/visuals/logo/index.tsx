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
  type: Type;
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
  | 'tips2-active';
