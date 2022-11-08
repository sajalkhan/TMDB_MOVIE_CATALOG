import { mapModifiers } from 'libs/component';
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  message?: string;
}

export const Button: React.FC<ButtonProps> = ({ message = 'Add To Favorite', onClick }) => {
  const componentClassName = mapModifiers('a-button');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className} onClick={onClick}>
      <p className="a-button__heart">
        <span className="a-button__message">{message}</span>
      </p>
    </div>
  );
};
