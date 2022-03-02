import { Props as TextDisplayProps, TextDisplay } from '@visuals/text-display';
import React, { useState } from 'react';
import styles from './style.scss';

export const Button: React.FC<Props> = ({
  children,
  isDisabled,
  size,
  colorSet,
  className,
  icon,
  onClick,
}): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const buttonStyles = [
    styles.button,
    styles[`color-set-${colorSet}`],
    styles[`size-${size}`],
    isDisabled && styles.disabled,
    className,
  ]
    .filter((style) => style)
    .join(' ');

  const textDisplayProps: TextDisplayProps = {
    weight: 'bold',
  };

  switch (size) {
    case 'small':
      textDisplayProps.size = 'medium';
      textDisplayProps.weight = 'normal';
      break;
    case 'smaller':
      textDisplayProps.size = 'small';
      textDisplayProps.weight = 'normal';
      break;
    default:
      textDisplayProps.size = 'large';
      textDisplayProps.weight = 'bold';
      break;
  }

  switch (colorSet) {
    case 'none':
      textDisplayProps.color = isDisabled ? 'gray-3' : isHovered ? 'primary' : 'gray-1';
      break;
    case 'gray':
      textDisplayProps.color = isDisabled ? 'gray-3' : 'gray-1';
      break;
    case 'white':
      textDisplayProps.color = isDisabled ? 'gray-3' : isHovered ? 'primary-1' : 'primary';
      textDisplayProps.weight = 'bold';
      break;
    default:
      textDisplayProps.color = isDisabled ? 'gray-3' : 'white';
      break;
  }

  const iconStyles =
    icon &&
    [styles.iconSize, styles.iconColor, isHovered && styles.iconHovered]
      .filter((style) => style)
      .join(' ');

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      disabled={isDisabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.buttonLabelContainer}>
        {icon && <span className={iconStyles}>{icon}</span>}
        <TextDisplay {...textDisplayProps}>{children}</TextDisplay>
      </div>
    </button>
  );
};

Button.defaultProps = {
  isDisabled: false,
  size: 'normal',
  colorSet: 'normal',
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  children: string;
  isDisabled?: boolean;
  size?: TSize;
  colorSet?: TColorSet;
  className?: string;
  icon?: React.ReactNode;
}

export type TSize = 'normal' | 'small' | 'smaller';

export type TColorSet = 'normal' | 'gray' | 'alert' | 'white' | 'none';

interface IDispatchProps {
  onClick?: () => void;
}
