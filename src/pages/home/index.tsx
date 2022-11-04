import { useGetGenres } from 'api/useGetGenres';
import React from 'react';

type Genres = {
  id: string;
  name: string;
};

const Home: React.FC = () => {
  const { data } = useGetGenres();

  return (
    <div className="p-home">
      <div className="p-home__content">
        {data?.map((item: Genres, indx: number) => {
          return (
            <ul key={indx}>
              <li>{item.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
