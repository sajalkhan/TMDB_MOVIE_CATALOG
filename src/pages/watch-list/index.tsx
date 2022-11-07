import { Heading } from 'components/atoms/heading';
import { CardList } from 'components/molecules/card-list';
import { useMoviesState } from 'contexts/movies';
import React from 'react';

const Genre: React.FC = () => {
  const watchList = useMoviesState();

  return (
    <div className="p-watch-list">
      <div className="p-watch-list__content">
        <Heading>{watchList.length ? 'Favorite Movie List' : 'No Movie Added'}</Heading>
        <CardList movies={watchList || []} />
      </div>
    </div>
  );
};

export default Genre;
