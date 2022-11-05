import DefaultImage from 'assets/images/default_image.png';
import { Text } from 'components/atoms/text';
import { mapModifiers, ModifierProp } from 'libs/component';
import React from 'react';
export interface cardProps {
  modifiers?: ModifierProp<'large' | 'medium' | 'small'>;
  className?: string;
  imgUrl: string;
  movieName: string;
  id: string | number;
  onClick?: () => void;
}

export const Card: React.FC<cardProps> = ({
  modifiers,
  className: additionalClassName = '',
  imgUrl,
  movieName,
  id,
  onClick,
}) => {
  const componentClassName = mapModifiers('a-card', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w342' + imgUrl;

  return (
    <div className={className} key={id} onClick={onClick}>
      <img className="a-card__image" src={imgUrl ? imgBaseUrl : DefaultImage} alt="image" />
      <Text weight="bold">{movieName}</Text>
    </div>
  );
};
