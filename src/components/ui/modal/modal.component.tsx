import React, { useState } from 'react';
import clsx from 'clsx';
import { Props } from './modal.props';

export const Modal = ({ children, content, ...props }: Props): JSX.Element => {
  //const [position, setPosition] = useState({ x: 0, y: 0 });
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
      className="cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // onMouseMove={(e) => setPosition({ x: e.pageX, y: e.pageY })}
      {...props}
    >
      {children}

      {!hidden && (
        <div
          // style={{ top: position.y + 25, left: position.x }}
          className={clsx(
            'absolute p-2 border-purple-900 border-2 bg-slate-800 z-50 rounded-md top-auto right-auto bottom-0 left-0',

            {
              hidden: hidden,
            }
          )}
        >
          {content}
          <div>qqqq</div>
        </div>
      )}
    </div>
  );
};
