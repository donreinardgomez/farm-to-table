import { IStore } from '@models/store';
import { formatNumber } from '@utils/format-number';
import { TextDisplay } from '@visuals/text-display';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import styles from './style.scss';

const ManufacturerPageFC: React.FC<Props> = ({ state, match }) => {
  const targetManId = Number(match?.params['id']);
  const displayManufacturer = state?.data?.manufacturers.find((man) => man.id === targetManId);
  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20px',
          }}
        >
          <TextDisplay size='xx-large' weight='bold'>
            Manufacture Company Information:
          </TextDisplay>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
          }}
        >
          <TextDisplay size='xxx-large' weight='bold' color='primary-1'>
            {displayManufacturer.name}
          </TextDisplay>
        </div>
      </div>

      <div className={styles.table}>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50px',
            }}
          >
            <TextDisplay size='large' weight='bold'>
              Product Item List:
            </TextDisplay>
          </div>
        </div>

        <div className={styles.table}>
          <TextDisplay weight='normal'>Item 1</TextDisplay>
          <div className={styles.items}>
            <TextDisplay weight='normal'>Name: {displayManufacturer.items[0].name}</TextDisplay>
            <TextDisplay weight='normal'>
              Made in: {displayManufacturer.items[0].originCountry}
            </TextDisplay>
            <TextDisplay weight='normal'>
              Green Points: {formatNumber(displayManufacturer.items[0].greenPoint)}
            </TextDisplay>
            <TextDisplay weight='normal'>
              Description: {displayManufacturer.items[0].description}
            </TextDisplay>
          </div>
        </div>

        <div className={styles.table}>
          <TextDisplay weight='normal'>Item 2</TextDisplay>
          <div className={styles.items}>
            <TextDisplay weight='normal'>Name: {displayManufacturer.items[1].name}</TextDisplay>
            <TextDisplay weight='normal'>
              Made in: {displayManufacturer.items[1].originCountry}
            </TextDisplay>
            <TextDisplay weight='normal'>
              Green Points: {formatNumber(displayManufacturer.items[1].greenPoint)}
            </TextDisplay>
            <TextDisplay weight='normal'>
              Description: {displayManufacturer.items[1].description}
            </TextDisplay>
          </div>
        </div>

        <div className={styles.table}>
          <TextDisplay weight='normal'>Item 3</TextDisplay>
          <div className={styles.items}>
            <TextDisplay weight='normal'>Name: {displayManufacturer.items[2].name}</TextDisplay>
            <TextDisplay weight='normal'>
              Made in: {displayManufacturer.items[2].originCountry}
            </TextDisplay>
            <TextDisplay weight='normal'>
              Green Points: {formatNumber(displayManufacturer.items[2].greenPoint)}
            </TextDisplay>
            <TextDisplay weight='normal'>
              Description: {displayManufacturer.items[2].description}
            </TextDisplay>
          </div>
        </div>
      </div>
    </div>
  );
};

export type Props = IStateProps & IDispatchProps & RouteComponentProps;

interface IStateProps {
  state: IStore;
}

interface IDispatchProps {}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = {};

export const ManufacturerPage = compose(connect(mapStateToProps, mapDispatchToProps))(
  ManufacturerPageFC,
);
