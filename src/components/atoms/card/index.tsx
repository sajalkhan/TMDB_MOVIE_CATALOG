import DefaultImage from 'assets/images/default_image.png';
import { Text } from 'components/atoms/text';
import { IMAGE_BASEURL } from 'constants/index';
import { mapModifiers, ModifierProp } from 'libs/component';
import React from 'react';

export interface cardProps {
  modifiers?: ModifierProp<'large' | 'medium' | 'small'>;
  className?: string;
  imgUrl: string;
  movieName: string;
  id?: string | number;
}

export const Card: React.FC<cardProps> = ({
  modifiers,
  className: additionalClassName = '',
  imgUrl,
  movieName,
  id,
}) => {
  const componentClassName = mapModifiers('a-card', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const imgBaseUrl = IMAGE_BASEURL + imgUrl;

  return (
    <div className={className} key={id}>
      <img className="a-card__image" src={imgUrl ? imgBaseUrl : DefaultImage} alt="image" draggable={false} />
      <Text weight="bold">{movieName}</Text>
    </div>
  );
};
