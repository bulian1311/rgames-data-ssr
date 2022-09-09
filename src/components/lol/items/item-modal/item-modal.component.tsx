import React from 'react';
import { useAppSelector } from '@hooks';
import { selectItemById } from '@store';
import { Modal } from '@components';
import { Props } from './item-modal.props';

export const ItemModal = ({
  children,
  itemId,
  ...props
}: Props): JSX.Element => {
  const item = useAppSelector(selectItemById(itemId));

  const renderContent = () => (
    <div className="flex gap-2" {...props}>
      <img
        width={80}
        height={80}
        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${item.image.full}`}
      />
      <span>{item.name}</span>
    </div>
  );

  return <Modal content={renderContent()}>{children}</Modal>;
};
