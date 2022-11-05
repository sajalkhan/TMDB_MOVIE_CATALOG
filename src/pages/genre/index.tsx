import { UseGetTopMovies } from 'api/useGetTopMovies';
import { CardList } from 'components/molecules/card-list';
import React from 'react';
import { useParams } from 'react-router-dom';

const Genre: React.FC = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = UseGetTopMovies(id ?? '');

  return (
    <div className="p-genre">
      <div className="p-genre__content">{isSuccess && <CardList movies={data} isLoading={isLoading} />}</div>
    </div>
  );
};

export default Genre;
