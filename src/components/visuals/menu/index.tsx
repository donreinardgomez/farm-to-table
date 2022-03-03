import { IMenuItem } from '@models/menu-item';
import { isOk } from '@utils/is-ok';
import { TextDisplay } from '@visuals/text-display';
import hash from 'object-hash';
import React from 'react';
import styles from './style.scss';

export const Menu: React.FC<Props> = ({ className, menuItems }) => {
  const handleOnClick = (name) => {
    if (!window || name === 'Home') window.location.href = '/home';
  };

  const renderMenuItems = () => {
    if (!isOk(menuItems)) return;
    return menuItems.map((item, i) => (
      <div className={styles.item} key={hash(i)} onClick={() => handleOnClick(item?.name)}>
        <TextDisplay size='x-large' weight='bold' color='white'>
          {item?.name}
        </TextDisplay>
      </div>
    ));
  };

  return <div className={`${styles.container} ${className}`}>{renderMenuItems()}</div>;
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  menuItems: IMenuItem[];
  className?: string;
}

interface IDispatchProps {}
