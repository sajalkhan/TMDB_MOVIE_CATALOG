import { Card, cardProps } from 'components/atoms/card';
import { Loading } from 'components/atoms/loading';
import { useMoviesDispatch } from 'contexts/movies';

import React from 'react';

interface cardListProps {
  size?: 'small' | 'medium' | 'large';
  movies: cardProps[];
  isLoading?: boolean;
}

export const CardList: React.FC<cardListProps> = ({ movies, size = 'medium', isLoading }) => {
  const dispatch = useMoviesDispatch();
  if (isLoading) return <Loading />;

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
    <div className="m-card-list">
      <div className="m-card-list__items">
        {movies.map((item: cardProps) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              movieName={item.movieName}
              imgUrl={item.imgUrl}
              modifiers={size}
              onClick={handleWatchList}
            />
          );
        })}
      </div>
    </div>
  );
};
