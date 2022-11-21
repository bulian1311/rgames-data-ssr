import React, { useState } from 'react';
import clsx from 'clsx';
import { ModalContent } from './modal-content';
import { Props } from './modal.props';

export const Modal = ({ children, content, ...props }: Props): JSX.Element => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [delayHandler, setDelayHandler] = useState<any>(null);

  const handleMouseEnter = () => {
    setDelayHandler(
      setTimeout(() => {
        setHidden(false);
      }, 500)
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(delayHandler);
    setHidden(true);
  };

  return (
    <div
      className={clsx('cursor-pointer relative')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      {!hidden && <ModalContent content={content} />}
    </div>
  );
};
