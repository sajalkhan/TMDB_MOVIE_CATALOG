/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseGetGenres } from 'api/useGetGenres';
import { UseGetMovies } from 'api/useGetMovies';
import { Loading } from 'components/atoms/loading';
import { CardList } from 'components/molecules/card-list';
import { Movies } from 'components/organisms/movies';
import { useMoviesDispatch } from 'contexts/movies';
import React from 'react';

type Genres = {
  id: string;
  name: string;
};

const GetMovies = ({ items: { id, name } }: any) => {
  const { data, isLoading } = UseGetMovies(name, id);
  const dispatch = useMoviesDispatch();

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

  return <CardList movies={data?.slice(0, 5) || []} onClick={handleWatchList} isLoading={isLoading} />;
};

const Home: React.FC = () => {
  const { data, isLoading } = UseGetGenres();
  if (isLoading) return <Loading />;

  return (
    <div className="p-home">
      <div className="p-home__content">
        {data.map((item: Genres) => {
          return (
            <Movies key={item.id} title={item.name} movieId={item.id}>
              <GetMovies items={item} />
            </Movies>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
