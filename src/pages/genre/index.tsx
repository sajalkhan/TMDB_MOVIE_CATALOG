import { UseGetTopMovies } from 'api/useGetTopMovies';
import { Heading } from 'components/atoms/heading';
import { CardList } from 'components/molecules/card-list';
import { useMoviesDispatch } from 'contexts/movies';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Genre: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useMoviesDispatch();
  const { genre } = location.state as never;
  const { data, isLoading } = UseGetTopMovies(id ?? '');

  const handleWatchList = (id: string | number | undefined, imgUrl: string, movieName: string) => {
    dispatch({
      type: 'ADD',
      payload: {
        id,
        imgUrl,
        movieName,
      },
    });
  };

  return (
    <div className="p-genre">
      <div className="p-genre__content">
        <Heading>Top 10 Movies in {genre}</Heading>
        <CardList movies={data || []} onClick={handleWatchList} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Genre;
