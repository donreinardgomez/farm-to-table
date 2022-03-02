import { isOk } from '@utils/is-ok';
import { TextDisplay } from '@visuals/text-display';
import hash from 'object-hash';
import React, { PropsWithChildren, useState } from 'react';
import styles from './style.scss';

export const Toggle = <T,>({
  items,
  size,
  className,
  theme,
  selectedValue,
  onToggleChange,
}: PropsWithChildren<Props<T>>) => {
  const [toggledItem, setToggledItem] = useState<T>(selectedValue);
  if (!isOk(items)) return <React.Fragment />;

  const handleToggleChange = (id: T) => {
    setToggledItem(id);
    if (!onToggleChange) return;
    onToggleChange(id);
  };

  return (
    <div className={`${styles.toggle} ${styles[`theme-${theme}`]} ${className}`}>
      {items.map((item, i) => {
        const { id, icon, label } = item;
        const isSelected = id === toggledItem;
        let content;
        if (isOk(label)) {
          content = (
            <TextDisplay
              weight={size === 'medium' ? 'bold' : 'normal'}
              size={size === 'medium' ? 'x-large' : 'small'}
              color={isSelected ? 'white' : theme === 'white' ? 'gray-3' : 'gray-1'}
            >
              {label}
            </TextDisplay>
          );
        } else if (isOk(icon)) {
          content = item.icon;
        }
        return (
          <div
            className={`${styles.toggleItem} ${styles[`theme-${theme}`]} ${
              styles[`size-${size}`]
            } ${isSelected && styles.selected} `}
            key={hash(i)}
            onClick={() => handleToggleChange(id)}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
};

Toggle.defaultProps = {
  size: 'medium',
  theme: 'white',
};

export type Props<T> = IStateProps<T> & IDispatchProps<T>;

interface IStateProps<T> {
  items: { label?: string; icon?: React.ReactNode; id: T }[];
  selectedValue?: T;
  size?: 'small' | 'medium';
  className?: string;
  theme?: 'white' | 'gray';
}

interface IDispatchProps<T> {
  onToggleChange: (id: T) => void;
}
