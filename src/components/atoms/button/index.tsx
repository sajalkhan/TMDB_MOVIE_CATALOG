import { mapModifiers } from 'libs/component';
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  const componentClassName = mapModifiers('a-button');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className} onClick={onClick}>
      <p className="a-button__heart">
        <span className="a-button__message" />
      </p>
    </div>
  );
};
