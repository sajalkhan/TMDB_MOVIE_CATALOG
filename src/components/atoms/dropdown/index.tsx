import { mapModifiers } from 'libs/component';
import React from 'react';

export type dropdownProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const Dropdown: React.FC<dropdownProps> = ({ children }) => {
  const componentClassName = mapModifiers('a-dropdown');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      <label className="a-dropdown__button">Genres</label>
      <div className="a-dropdown__content">{children}</div>
    </div>
  );
};
