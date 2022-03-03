import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export const AppSectionHeader: React.FC<Props> = ({
  children,
  hasToggle,
  isCollapsed,
  onToggleClick,
}) => {
  const handleToggleClick = () => {
    if (!onToggleClick) return;
    onToggleClick(!isCollapsed);
  };
  const renderToggle = () => {
    if (!hasToggle) return;
    return isCollapsed ? (
      <KeyboardArrowUp onClick={handleToggleClick} />
    ) : (
      <KeyboardArrowDown onClick={handleToggleClick} />
    );
  };
  return (
    <TextDisplay color='white' className={styles.sectionHeader} weight='bold' size='large'>
      {children}
      {renderToggle()}
    </TextDisplay>
  );
};

export type Props = IStateProps & IDispatchProps;

AppSectionHeader.defaultProps = {
  hasToggle: false,
  isCollapsed: false,
};

interface IStateProps {
  children: string;
  hasToggle?: boolean;
  isCollapsed?: boolean;
}

interface IDispatchProps {
  onToggleClick?: (flag: boolean) => void;
}
