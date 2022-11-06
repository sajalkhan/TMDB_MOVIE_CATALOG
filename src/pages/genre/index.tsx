import { UseGetTopMovies } from 'api/useGetTopMovies';
import { Heading } from 'components/atoms/heading';
import { CardList } from 'components/molecules/card-list';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Genre: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const { genre } = location.state as never;
  const { data, isLoading } = UseGetTopMovies(id ?? '');

  return (
    <div className="p-genre">
      <div className="p-genre__content">
        <Heading>Top 10 Movies in {genre}</Heading>
        <CardList movies={data || []} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Genre;
