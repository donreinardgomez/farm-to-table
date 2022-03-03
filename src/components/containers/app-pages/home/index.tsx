import { setDisplayItem } from '@actions/ui';
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
import { useHistory } from 'react-router';
import { compose } from 'redux';
import styles from './style.scss';
const AppHomeFC: React.FC<Props> = ({
  state: {
    data: { items: dataItems },
    ui: { displayConsumer },
  },
  setDisplayItem,
}) => {
  const history = useHistory();
  const handleItemClick = (item: IItem) => {
    setDisplayItem(item);
    history.push('/app/item');
  };
  const renderItemList = (total = 20) => {
    const displayItems = generateDummyPurchasedItems(total, displayConsumer?.id);
    if (!isOk(displayItems)) return;

    return displayItems.map((item, i) => {
      const targetItem: IItem =
        dataItems.find((it) => it.id === item?.itemId) || generateDummyItem();
      if (!isOk(targetItem)) return;
      return (
        <ItemCard
          onClick={() => handleItemClick(targetItem)}
          className={styles.scrollerItem}
          key={hash(i)}
          item={targetItem}
        />
      );
    });
  };

  return (
    <div>
      <AppSectionHeader>Recommendations</AppSectionHeader>
      <div className={styles.scroller}>{renderItemList()}</div>
      <AppSectionHeader>Purchase history</AppSectionHeader>
      <div className={styles.scroller}>{renderItemList(50)}</div>
    </div>
  );
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  state: IStore;
}

interface IDispatchProps {
  setDisplayItem: (item: IItem) => void;
}

const mapStateToProps = (state: IStore): Partial<IStateProps> => ({
  state,
});

const mapDispatchToProps: IDispatchProps = { setDisplayItem };

export const AppHome = compose(connect(mapStateToProps, mapDispatchToProps))(AppHomeFC);
