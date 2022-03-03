import { Spa } from '@material-ui/icons';
import { IStore } from '@models/store';
import { formatNumber } from '@utils/format-number';
import { AppSectionHeader } from '@visuals/app-section-header';
import { TextDisplay } from '@visuals/text-display';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './style.scss';

const ItemPageFC: React.FC<Props> = ({
  state: {
    ui: { displayItem: item },
  },
}) => {
  const [isDecriptionCollapsed, setIsDecriptionCollapsed] = useState(true);
  const [isDistributionCollapsed, setIsDistributionCollapsed] = useState(true);

  return (
    <div className={styles.container}>
      <TextDisplay className={styles.itemName} weight='bold' size='summary-medium' color='white'>
        {item.name}
      </TextDisplay>
      <div className={styles.imageContainer}>
        <img src={item.image} className={styles.image} />
      </div>
      <div className={styles.priceContainer}>
        <TextDisplay className={styles.price} weight='bold' size='summary-small' color='green-1'>
          {formatNumber(item.price)}円
        </TextDisplay>
        <TextDisplay
          display='inline-flex-centered-text'
          weight='bold'
          size='x-small'
          color='green-3'
        >
          <Spa />
          {formatNumber(item.greenPoint)} Green Points
        </TextDisplay>
      </div>
      VIEW FARM
      <AppSectionHeader
        hasToggle
        isCollapsed={isDecriptionCollapsed}
        onToggleClick={(flag: boolean) => setIsDecriptionCollapsed(flag)}
      >
        Description
      </AppSectionHeader>
      {isDecriptionCollapsed && (
        <div className={styles.infoContainer}>
          <TextDisplay>{item.description}</TextDisplay>
        </div>
      )}
      <AppSectionHeader
        hasToggle
        isCollapsed={isDistributionCollapsed}
        onToggleClick={(flag: boolean) => setIsDistributionCollapsed(flag)}
      >
        Distribution History
      </AppSectionHeader>
      {isDistributionCollapsed && (
        <div className={styles.infoContainer}>
          <TextDisplay>
            <ol className={styles.workFlow}>
              <li>{item.distributionHistory[0].name}</li>
              <li>{item.distributionHistory[1].name}</li>
              <li>{item.distributionHistory[2].name}</li>
              <li>{item.distributionHistory[3].name}</li>
            </ol>
          </TextDisplay>
        </div>
      )}
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  state: IStore;
}

interface IDispatchProps {}
const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {};

export const ItemPage = compose(connect(mapStateToProps, mapDispatchToProps))(ItemPageFC);
