import { UseGetMovies } from 'api/useGetMovies';
import { Heading } from 'components/atoms/heading';
import { CardList } from 'components/molecules/card-list';
import { mapModifiers } from 'libs/component';
import React from 'react';
import { Link } from 'react-router-dom';

export type MovieProps = {
  title: string;
  movieId: string | number;
};

export const Movies: React.FC<MovieProps> = ({ title, movieId }) => {
  const { data, isLoading } = UseGetMovies(title, movieId);

  const componentClassName = mapModifiers('o-movies');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      <Heading tag="h1">
        <Link to={`/genre/${movieId}`} state={{ genre: `${title}` }} className="o-movies__title">
          {title}
        </Link>
      </Heading>
      <CardList movies={data?.slice(0, 5) || []} isLoading={isLoading} />
    </div>
  );
};
