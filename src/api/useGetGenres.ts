import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/index';
import { useQuery } from 'react-query';

const fetchMovieData = () => {
  return axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
};

export const UseGetGenres = () => {
  return useQuery('genre', fetchMovieData, {
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: data => data?.data?.genres,
  });
};
