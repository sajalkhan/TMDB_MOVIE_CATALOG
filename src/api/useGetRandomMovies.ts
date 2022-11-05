import axios from 'axios';
import { useQuery } from 'react-query';

const fetchMovieInfo = (searchKey: string) => {
  const API_KEY = 'cd890f94a756b1518a2a17617a5b430e';
  const BASE_URL = 'api.themoviedb.org/3';
  return axios.get(
    `https://${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=${searchKey}`
  );
};

export const useGetRandomMovies = (params: string, searchKey: string) => {
  return useQuery([params], () => fetchMovieInfo(searchKey), {
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: data => {
      return data?.data.results.map((item: any) => {
        return {
          id: item.id,
          imgUrl: item.poster_path,
          movieName: item.title,
        };
      });
    },
  });
};
