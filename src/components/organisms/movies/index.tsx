import { Heading } from 'components/atoms/heading';
import { mapModifiers } from 'libs/component';
import React from 'react';
import { Link } from 'react-router-dom';

export type MovieProps = {
  title: string;
  movieId: string | number;
  children?: React.ReactNode;
};

export const Movies: React.FC<MovieProps> = ({ title, movieId, children }) => {
  const componentClassName = mapModifiers('o-movies');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      <Heading tag="h1">
        <Link to={`/genre/${movieId}`} state={{ genre: `${title}` }} className="o-movies__title">
          {title}
        </Link>
      </Heading>
      <div className="o-movies__items">{children}</div>
    </div>
  );
};
