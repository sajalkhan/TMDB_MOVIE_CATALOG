import { UseGetGenres } from 'api/useGetGenres';
import { Movies } from 'components/organisms/movies';
import React from 'react';

type Genres = {
  id: string;
  name: string;
};

const Home: React.FC = () => {
  const { data } = UseGetGenres();

  return (
    <div className="p-home">
      <div className="p-home__content">
        {data?.map((item: Genres) => {
          return <Movies key={item.id} title={item.name} movieId={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
