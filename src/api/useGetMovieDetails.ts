import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/index';
import { useQuery } from 'react-query';

const fetchMovieInfo = (movieId: string | number) => {
  return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
};

export const UseGetMovieDetails = (movieId: string | number) => {
  return useQuery(['genres', movieId], () => fetchMovieInfo(movieId), {
    enabled: true,
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: data => {
      return {
        id: data?.data.id,
        title: data?.data.title,
        overview: data?.data.overview,
        imdbid: data?.data.imdb_id,
        popularity: data?.data.popularity,
        releaseDate: data?.data.release_date,
        imgUrl: data?.data.poster_path,
        movieName: data?.data.title,
      };
    },
  });
};
