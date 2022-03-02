import { Logo } from '@visuals/logo';
import React, { useState } from 'react';
import styles from './style.scss';

export const TipsButton: React.FC<Props> = ({ className, onClick }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`${styles.tipsButton} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Logo type={isHovered ? 'tips2-active' : 'tips2'} />
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  className?: string;
}

interface IDispatchProps {
  onClick: () => void;
}
