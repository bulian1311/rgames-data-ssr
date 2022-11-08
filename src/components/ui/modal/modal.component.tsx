import React, { useState, MouseEvent, useRef } from 'react';
import clsx from 'clsx';
import { Props } from './modal.props';

export const Modal = ({ children, content, ...props }: Props): JSX.Element => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState<boolean>(true);
  const [delayHandler, setDelayHandler] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const rect = modalRef.current!.getBoundingClientRect();
    const elementWidth = modalRef.current!.offsetWidth;
    const elementHeigth = modalRef.current!.offsetHeight;

    console.log(rect.top, rect.y);

    setPosition({ x: rect.x, y: rect.y });

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

  // const handleMouseMove = (e: MouseEvent) => {

  //   setPosition({ x: e.pageX, y: e.pageY });
  // };

  return (
    <div
      ref={modalRef}
      className="cursor-pointer relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      //onMouseMove={handleMouseMove}
      {...props}
    >
      {children}

      {!hidden && (
        <div
          //style={{ top: position.y - 25, left: position.x }}
          className={clsx(
            'absolute flex p-2 border-purple-900 border-2 bg-slate-800 z-50 rounded-md'
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
