import React from 'react';
import { Props } from './footer.props';

export const Footer = ({ ...props }: Props): JSX.Element => {
  return (
    <div className="bg-slate-900 flex justify-center py-4 mt-6" {...props}>
      Footer
    </div>
  );
};
