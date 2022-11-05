import { UseGetMovieDetails } from 'api/useGetMovieDetails';
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isSuccess } = UseGetMovieDetails(id ?? '');

  return <div className="p-movie-details">movie details</div>;
};

export default MovieDetails;
