import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/index';
import { useQuery } from 'react-query';

const fetchMovieInfo = (searchKey: string | number) => {
  return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=${searchKey}`);
};

const getRandomFiveMovies = (arr: any, num: number) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
};

export const useGetRandomMovies = (params: string, searchKey: string | number) => {
  return useQuery([params], () => fetchMovieInfo(searchKey), {
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: data => {
      const movies = getRandomFiveMovies(data?.data.results, 5);

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
