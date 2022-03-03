import { Menu } from '@material-ui/icons';
import { IConsumer } from '@models/consumer';
import { formatNumber } from '@utils/format-number';
import { Logo } from '@visuals/logo';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import styles from './style.scss';

export const AppHeader: React.FC<Props> = ({ consumer, onBurgerClick }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logoBurgerContainer}>
        <Logo className={styles.logo} type='logo-header' />
        {onBurgerClick && <Menu onClick={onBurgerClick} className={styles.burger} />}
      </div>
      <div>
        <Logo className={styles.avatar} type={consumer?.avatar} />
        <div className={styles.topHalf}></div>
        <div className={styles.bottomHalf}>
          <div className={styles.bottomHalfContent}>
            <TextDisplay weight='bold' size='xxx-large' color='white'>
              {consumer?.firstName} {consumer?.lastName}
            </TextDisplay>
            <TextDisplay weight='bold' size='large' color='gray-1'>
              Wallet: {formatNumber(consumer?.walletPoints || 0)}円
            </TextDisplay>
            <TextDisplay size='small' weight='bold' color='gray-3'>
              {formatNumber(consumer?.greenPoints || 0)} Green Points
            </TextDisplay>
            <TextDisplay size='x-small' color='white'>
              {consumer?.address}
            </TextDisplay>
            <TextDisplay size='x-small' color='white'>
              {consumer?.phoneNmber}
            </TextDisplay>
          </div>
        </div>
      </div>
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  consumer: IConsumer;
  onBurgerClick?: () => void;
}

interface IDispatchProps {}
