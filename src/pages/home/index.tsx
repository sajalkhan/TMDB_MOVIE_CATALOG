/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseGetGenres } from 'api/useGetGenres';
import { UseGetMovies } from 'api/useGetMovies';
import { CardList } from 'components/molecules/card-list';
import { Movies } from 'components/organisms/movies';
import React from 'react';

type Genres = {
  id: string;
  name: string;
};

const GetMovies = (title: string | any, movieId: string) => {
  const { data, isLoading } = UseGetMovies(title, movieId);
  return <CardList movies={data?.slice(0, 5) || []} isLoading={isLoading} />;
};

const Home: React.FC = () => {
  const { data } = UseGetGenres();

  return (
    <div className="p-home">
      <div className="p-home__content">
        {data?.map((item: Genres) => {
          return (
            <Movies key={item.id} title={item.name} movieId={item.id}>
              <GetMovies title={item.name} movieId={item.id} />
            </Movies>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
