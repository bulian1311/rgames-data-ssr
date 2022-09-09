import React from 'react';
import { Menu } from './menu';
import { Filters } from './filters';
import { Props } from './sidebar.props';

export const Sidebar = ({ ...props }: Props): JSX.Element => {
  return (
    <div className="w-64" {...props}>
      <div className="fixed w-64">
        <Menu />
        {/* <Filters /> */}
      </div>
    </div>
  );
};
