import { CircularProgress, LinearProgress } from '@material-ui/core';
import React from 'react';
import styles from './styles.scss';

export class Progress extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    type: 'circular',
  };
  public render(): JSX.Element {
    const { type } = this.props;

    switch (type) {
      case 'circular':
        return (
          <div className={styles.progress}>
            <CircularProgress />
          </div>
        );
      case 'linear':
        return (
          <div className={styles.progress}>
            <LinearProgress />
          </div>
        );
    }
  }
}

export type Props = IStateProps;

interface IStateProps {
  type?: 'circular' | 'linear';
}
