import React from 'react';
import { useItemsMapQuery } from '@hooks';
import { Modal } from '@components';
import { Props } from './item-modal.props';

export const ItemModal = ({
  children,
  itemId,
  ...props
}: Props): JSX.Element => {
  const { data, isSuccess } = useItemsMapQuery();

  const renderContent = () => {
    if (!isSuccess) return;
    const item = data[itemId];

    return (
      <div className="flex gap-2" {...props}>
        <div className="w-16">
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image.full}`}
          />
        </div>

        <div className="flex flex-col w-32">
          <span>{item.name}</span>
        </div>
      </div>
    );
  };

  return <Modal content={renderContent()}>{children}</Modal>;
};
