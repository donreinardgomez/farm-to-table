import { IItem } from '@models/item';
import { IStore } from '@models/store';
import { generateDummyItem } from '@store/dummy/item-pool';
import { generateDummyPurchasedItems } from '@store/dummy/purchased-items';
import { isOk } from '@utils/is-ok';
import { AppSectionHeader } from '@visuals/app-section-header';
import { ItemCard } from '@visuals/item-card';
import hash from 'object-hash';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './style.scss';
const AppHomeFC: React.FC<Props> = ({
  state: {
    data: { items: dataItems },
    ui: { displayConsumer },
  },
}) => {
  const renderItemList = () => {
    const displayItems = generateDummyPurchasedItems(20, displayConsumer?.id);
    if (!isOk(displayItems)) return;

    return displayItems.map((item, i) => {
      const targetItem: IItem =
        dataItems.find((it) => it.id === item?.itemId) || generateDummyItem();
      if (!isOk(targetItem)) return;
      return <ItemCard className={styles.scrollerItem} key={hash(i)} item={targetItem} />;
    });
  };

  return (
    <div>
      <AppSectionHeader>Recommendations</AppSectionHeader>
      <div className={styles.scroller}>{renderItemList()}</div>
      <AppSectionHeader>Purchase history</AppSectionHeader>
      <div className={styles.scroller}>{renderItemList()}</div>
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

export const AppHome = compose(connect(mapStateToProps, mapDispatchToProps))(AppHomeFC);
