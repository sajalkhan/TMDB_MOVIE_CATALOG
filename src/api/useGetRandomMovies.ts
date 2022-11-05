import axios from 'axios';
import { useQuery } from 'react-query';

const fetchMovieInfo = (searchKey: string | number) => {
  const API_KEY = 'cd890f94a756b1518a2a17617a5b430e';
  const BASE_URL = 'api.themoviedb.org/3';
  return axios.get(
    `https://${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=${searchKey}`
  );
};

const getRandom5Items = (arr: any, num: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

export const useGetRandomMovies = (params: string, searchKey: string | number) => {
  return useQuery([params], () => fetchMovieInfo(searchKey), {
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: data => {
      const movies = getRandom5Items(data?.data.results, 5);

      return movies.map((item: any) => {
        return {
          id: item.id,
          imgUrl: item.poster_path,
          movieName: item.title,
        };
      });
    },
  });
};
