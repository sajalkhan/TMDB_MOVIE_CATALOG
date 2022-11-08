/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heading } from 'components/atoms/heading';
import { CardList } from 'components/molecules/card-list';
import { useMoviesDispatch, useMoviesState } from 'contexts/movies';
import React from 'react';

const Genre: React.FC = () => {
  const watchList = useMoviesState();
  const dispatch = useMoviesDispatch();

  const handleWatchList = (id: any) => {
    dispatch({
      type: 'REMOVE',
      id,
    });
  };

  return (
    <div className="p-watch-list">
      <div className="p-watch-list__content">
        <Heading>{watchList.length ? 'Favorite Movie List' : 'No Movie Added'}</Heading>
        <CardList movies={watchList || []} onClick={handleWatchList} />
      </div>
    </div>
  );
};

export default Genre;
