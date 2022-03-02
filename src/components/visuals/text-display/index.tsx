import { DELIMITER } from '@app-settings';
import hash from 'object-hash';
import React, { CSSProperties } from 'react';
import styles from './style.scss';

export class TextDisplay extends React.PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    size: 'medium',
    weight: 'normal',
    color: 'gray-1',
    display: 'block',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  public render(): JSX.Element {
    const { isHovered } = this.state;
    const { hoverColor } = this.props;
    return (
      <div
        className={this.getClassNames(hoverColor && isHovered ? hoverColor : null)}
        style={this.props.style}
        onClick={this.props.onClick}
        onMouseEnter={() => this.onHover()}
        onMouseLeave={() => this.onMouseOut()}
      >
        {this.getContent()}
      </div>
    );
  }

  protected getContent() {
    const { children } = this.props;

    if (typeof children === 'string' && children.indexOf(DELIMITER) >= 0) {
      const splitContent = children.split(DELIMITER);
      return splitContent.map((content, i) => (
        <React.Fragment key={hash(i)}>
          {content}
          <br />
        </React.Fragment>
      ));
    }
    return children;
  }

  protected onHover() {
    if (!this.props.hoverColor) return;
    this.setState({
      isHovered: true,
    });
  }

  protected onMouseOut() {
    if (!this.props.hoverColor) return;
    this.setState({
      isHovered: false,
    });
  }

  protected getClassNames(colorOverride?: TColors) {
    const { size, display, color, weight, align, truncate, onClick, className } = this.props;
    const textStyle = [
      styles.textDisplay,
      styles[`size-${size}`],
      styles[`display-${display}`],
      styles[`weight-${weight}`],
      styles[`align-${align}`],
      onClick && styles.link,
      styles[`color-${colorOverride || color}`],
      truncate && styles[`truncate-${truncate}`],
      className,
    ].filter((style) => style);
    return textStyle.join(' ');
  }
}

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  size?:
    | 'x-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'x-large'
    | 'xx-large'
    | 'xxx-large'
    | 'summary-small'
    | 'summary-medium'
    | 'summary-large';
  weight?: 'bold' | 'normal';
  color?: TColors;
  hoverColor?: TColors;
  display?: 'block' | 'inline' | 'contents' | 'flex-centered-text';
  align?: 'center' | 'end' | 'default';
  truncate?: 'ellipsis';
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

interface IDispatchProps {
  onClick?: () => void;
}

export type TColors =
  | 'primary'
  | 'primary-1'
  | 'primary-3'
  | 'gray-1'
  | 'gray-2'
  | 'gray-3'
  | 'white'
  | 'alert'
  | 'summary-1'
  | 'summary-2'
  | 'summary-3';

interface State {
  isHovered?: boolean;
}
