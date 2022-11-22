import React from 'react';
import { useItemsMapQuery } from '@hooks';
import { Modal } from '@components';
import { itemImageUrl } from '@services';
import { Props } from './item-modal.props';

export const ItemModal = ({
  children,
  itemId,
  ...props
}: Props): JSX.Element => {
  const { itemsMap, isItemsMapSuccess, isItemsMapLoading } = useItemsMapQuery();

  const renderContent = () => {
    if (!isItemsMapSuccess || !itemsMap) return;
    const item = itemsMap[itemId];

    if (isItemsMapLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="flex gap-2" {...props}>
        <div className="w-16">
          <img src={itemImageUrl(item.image.full)} />
        </div>

        <div className="flex flex-col w-32">
          <span>{item.name}</span>
        </div>
      </div>
    );
  };

  return <Modal content={renderContent()}>{children}</Modal>;
};
