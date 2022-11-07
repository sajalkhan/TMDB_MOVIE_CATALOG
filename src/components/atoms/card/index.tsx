import DefaultImage from 'assets/images/default_image.png';
import { Button } from 'components/atoms/button';
import { Text } from 'components/atoms/text';
import { IMAGE_BASEURL } from 'constants/index';
import { mapModifiers, ModifierProp } from 'libs/component';
import React from 'react';
import { Link } from 'react-router-dom';

export interface cardProps {
  modifiers?: ModifierProp<'large' | 'medium' | 'small'>;
  className?: string;
  imgUrl: string;
  movieName: string;
  id?: string | number;
  onClick?: (id: string | number | undefined, imgUrl: string, movieName: string) => void;
}

export const Card: React.FC<cardProps> = ({
  modifiers,
  className: additionalClassName = '',
  imgUrl,
  movieName,
  onClick,
  id,
}) => {
  const componentClassName = mapModifiers('a-card', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const imgBaseUrl = IMAGE_BASEURL + imgUrl;

  return (
    <div className={className} key={id}>
      <Link to={`/movies/${id}`} key={id} className="m-card-list__link">
        <img className="a-card__image" src={imgUrl ? imgBaseUrl : DefaultImage} alt="image" draggable={false} />
        <Text weight="bold">{movieName}</Text>
      </Link>

      <div className="m-card-list__container">
        <Button onClick={() => onClick && onClick(id, imgUrl, movieName)} />
      </div>
    </div>
  );
};
