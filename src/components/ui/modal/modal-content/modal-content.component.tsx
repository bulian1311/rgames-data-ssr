import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Props } from './modal-content.props';

export const ModalContent = ({ content, ...props }: Props): JSX.Element => {
  const [size, setSize] = useState({ w: 0, h: 0, pw: 0, ph: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elementWidth = elementRef.current!.offsetWidth;
    const elementHeigth = elementRef.current!.offsetHeight;

    const parentElementWidth =
      elementRef.current?.parentElement?.offsetWidth || 0;
    const parentElementHeigth =
      elementRef.current?.parentElement?.offsetHeight || 0;

    setSize({
      w: elementWidth,
      h: elementHeigth,
      pw: parentElementWidth,
      ph: parentElementHeigth,
    });
  }, []);

  return (
    <>
      <div
        ref={elementRef}
        style={{ top: -size.h - 12, left: -(size.w / 2) + size.pw / 2 }}
        className={clsx(
          'absolute p-2 border-purple-900 border-2 bg-slate-800 z-40 rounded-md',
          'shadow-lg shadow-slate-900'
        )}
      >
        {content}
      </div>
      <div
        style={{ top: -12, left: size.pw / 2 - 5 }}
        className={clsx(
          'absolute z-50',
          'border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-purple-900 border-t-[10px]'
        )}
      ></div>
    </>
  );
};
