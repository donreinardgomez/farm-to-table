import { Props as TextDisplayProps, TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export class OperationCard extends React.PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    type: 'primary',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  public render(): JSX.Element {
    const { icon, children, type, onClick } = this.props;
    const { isHovered } = this.state;

    const textDisplayProps: TextDisplayProps = {
      weight: 'bold',
      size: 'large',
    };

    const iconStyle: string[] = [styles.icon];
    switch (type) {
      case 'primary':
        textDisplayProps.color = 'white';
        iconStyle.push(styles.iconTop);
        iconStyle.push(styles.typePrimaryIcon);
        break;
      case 'secondary':
        textDisplayProps.color = isHovered ? 'primary-1' : 'primary';
        textDisplayProps.size = 'medium';
        iconStyle.push(styles.iconLeft);
        iconStyle.push(styles.typeSecondaryIcon);
        if (isHovered) iconStyle.push(styles.hovered);
        break;
      case 'tertiary':
        textDisplayProps.color = isHovered ? 'primary' : 'gray-1';
        iconStyle.push(styles.iconLeft);
        iconStyle.push(styles.typeTertiaryIcon);
        break;
      default:
        break;
    }

    return (
      <div
        className={`${styles.operationCard} ${styles[`type-${type}`]} ${
          isHovered && `${styles.hovered}`
        }`}
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onClick={onClick}
      >
        <div className={iconStyle.join(' ')}>{icon}</div>
        <TextDisplay {...textDisplayProps}>{children}</TextDisplay>
      </div>
    );
  }

  protected handleMouseEnter() {
    this.setState({ isHovered: true });
  }
  protected handleMouseLeave() {
    this.setState({ isHovered: false });
  }
}

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  children: string;
  icon: React.ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary';
}

interface IDispatchProps {
  onClick?: () => void;
}

interface State {
  isHovered?: boolean;
}
