import { Logo, Type as LogoType } from '@visuals/logo';
import React from 'react';
import styles from './style.scss';

export class LogoButton extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    type: 'default',
  };

  public render(): JSX.Element {
    const { onClick, logo, label, type } = this.props;
    return (
      <div className={`${styles.iconBotton} ${styles[type]}`} onClick={onClick}>
        <Logo type={logo} />
        {label}
      </div>
    );
  }
}

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  logo: LogoType;
  label: string;
  type?: 'default' | 'active' | 'hover';
}

interface IDispatchProps {
  onClick?: () => void;
  onHover?: () => void;
}
