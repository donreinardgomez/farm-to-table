import { IStore } from '@models/store';
import { isOk } from '@utils/is-ok';
import { AppSectionHeader } from '@visuals/app-section-header';
import hash from 'object-hash';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const PurchasedItemsFC: React.FC<Props> = ({
  state: {
    data: { purchasedItems, items: dataItems },
    ui: { displayConsumer },
  },
}) => {
  const renderPurchasedItems = () => {
    if (!isOk(purchasedItems)) return;
    const displayItems = purchasedItems.filter((item) => item?.consumerId === displayConsumer.id);
    if (!isOk(displayItems)) return;

    return displayItems.map((item, i) => {
      const targetItem = dataItems.find((it) => it.id === item?.itemId);
      if (!isOk(targetItem)) return;
      return <div key={hash(i)}>{targetItem?.name}</div>;
    });
  };

  return (
    <div>
      <AppSectionHeader>Purchased Items</AppSectionHeader>
      {renderPurchasedItems()}
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

export const PurchasedItems = compose(connect(mapStateToProps, mapDispatchToProps))(
  PurchasedItemsFC,
);
