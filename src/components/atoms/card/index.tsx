import { mapModifiers, ModifierProp } from 'libs/component';
import React from 'react';

export interface cardProps {
  modifiers?: ModifierProp<'large' | 'medium' | 'small'>;
  className?: string;
  imgUrl: string;
  id: string;
  onClick?: () => void;
}

export const Card: React.FC<cardProps> = ({
  modifiers = 'medium',
  className: additionalClassName = '',
  imgUrl,
  id,
  onClick,
}) => {
  const componentClassName = mapModifiers('a-card', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w342/';

  return (
    <div className={className} key={id} onClick={onClick}>
      <img className="a-card__image" src={imgBaseUrl + imgUrl} alt="card img" />
    </div>
  );
};
