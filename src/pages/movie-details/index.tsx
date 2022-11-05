import { UseGetMovieDetails } from 'api/useGetMovieDetails';
import { MovieInfo } from 'components/molecules/movie-info';
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isSuccess } = UseGetMovieDetails(id ?? '');

  return (
    <div className="p-movie-details">
      {isSuccess && (
        <MovieInfo
          id={data.id}
          imgUrl={data.imgUrl}
          title={data.title}
          popularity={data.popularity}
          releaseDate={data.releaseDate}
          imDbId={data.imDbId}
          overview={data.overview}
        />
      )}
    </div>
  );
};

export default MovieDetails;
