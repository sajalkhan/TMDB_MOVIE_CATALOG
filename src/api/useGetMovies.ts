/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/index';
import { useQuery } from 'react-query';

const fetchMovieInfo = (searchKey: string | number) => {
  try {
    return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=${searchKey}`);
  } catch (error) {
    throw new Error('Exception message from random movies api');
  }
};

export const UseGetMovies = (params: string, searchKey: string | number) => {
  return useQuery([params], () => fetchMovieInfo(searchKey), {
    staleTime: 5000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,

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
