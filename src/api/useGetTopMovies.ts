/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/index';
import { useQuery } from 'react-query';

const fetchMovieInfo = (searchKey: string | number) => {
  try {
    return axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=${searchKey}&vote_average.gte=8.0`
    );
  } catch (error) {
    throw new Error('Exception message from top Movies api');
  }
};

const getTopTenMovies = (arr: any, num: number) => [...arr].slice(0, num);

export const UseGetTopMovies = (searchKey: string | number) => {
  return useQuery(['genres', searchKey], () => fetchMovieInfo(searchKey), {
    enabled: true,
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: data => {
      const movies = getTopTenMovies(data?.data.results, 10);

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
