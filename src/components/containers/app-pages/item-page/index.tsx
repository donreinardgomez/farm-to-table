import { Spa } from '@material-ui/icons';
import { IStore } from '@models/store';
import { formatNumber } from '@utils/format-number';
import { AppSectionHeader } from '@visuals/app-section-header';
import { Logo } from '@visuals/logo';
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
  const [isPalyMovie, setIsPalyMovie] = useState(false);
  const [isDistributionCollapsed, setIsDistributionCollapsed] = useState(false);

  return (
    <>
      {!isPalyMovie && (
        <div className={styles.container}>
          <TextDisplay
            className={styles.itemName}
            weight='bold'
            size='summary-medium'
            color='white'
          >
            {item.name}
          </TextDisplay>
          <div className={styles.imageContainer}>
            <img src={item.image} className={styles.image} />
          </div>
          <div className={styles.priceContainer}>
            <TextDisplay
              className={styles.price}
              weight='bold'
              size='summary-small'
              color='green-1'
            >
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
          <div className={styles.viewfarmContainer}>
            <button
              className={styles.viewfarmButton}
              onClick={() => {
                setIsPalyMovie(true);
              }}
            >
              <Logo className={(styles.image, styles.viewfarmIcon)} type='camera' />
              VIEW FARM
            </button>
          </div>
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
      )}
      {isPalyMovie && (
        <video
          preload='auto'
          controls
          onEnded={() => {
            setIsPalyMovie(false);
          }}
          className={styles.videoContainer}
        >
          <source
            src={
              'https://hackathonjapan.blob.core.windows.net/asset-fa0400af-c75e-4d1e-ad27-ebb8b3378c3f/ChickenFarmVideo.mp4?sp=r&st=2022-03-03T14:19:18Z&se=2022-03-03T22:19:18Z&spr=https&sv=2020-08-04&sr=b&sig=lGfMTt%2BId6%2FGmYnRSSkdPO9OE76f468d5Kwy0YyhnAk%3D'
            }
            type='video/mp4'
          />
        </video>
      )}
    </>
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
