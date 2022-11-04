/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchMovieData = () => {
  const API_KEY = 'cd890f94a756b1518a2a17617a5b430e';
  return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
};

export const useGetGenres = () => {
  return useQuery('genre', fetchMovieData, {
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: data => data?.data?.genres,
  });
};
