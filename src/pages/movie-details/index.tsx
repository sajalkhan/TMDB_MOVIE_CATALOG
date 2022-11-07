import { UseGetMovieDetails } from 'api/useGetMovieDetails';
import { Loading } from 'components/atoms/loading';
import { MovieInfo } from 'components/molecules/movie-info';
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = UseGetMovieDetails(id ?? '');

  if (isLoading) return <Loading />;

  return (
    <div className="p-movie-details">
      <MovieInfo
        id={data?.id}
        imgUrl={data?.imgUrl}
        title={data?.title}
        popularity={data?.popularity}
        releaseDate={data?.releaseDate}
        imDbId={data?.imDbId}
        overview={data?.overview}
      />
    </div>
  );
};

export default MovieDetails;
