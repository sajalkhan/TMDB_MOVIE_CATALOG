import { Card } from 'components/atoms/card';
import { Section } from 'components/molecules/section';
import { mapModifiers } from 'libs/component';
import React from 'react';

export type MovieInfoProps = {
  id: string | number;
  title: string;
  overview: string;
  imDbId: string;
  popularity: number;
  releaseDate: string;
  imgUrl: string;
};

export const MovieInfo: React.FC<MovieInfoProps> = ({
  id,
  title,
  overview,
  imDbId,
  popularity,
  releaseDate,
  imgUrl,
}) => {
  const componentClassName = mapModifiers('m-movie-info');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      <Card id={id} imgUrl={imgUrl} movieName={title} modifiers="large" />
      <Section modifiers="fill">
        <div className="m-movie-info__details">
          <p className="m-movie-info__popularity">
            <span>Popularity:</span>
            <span>{popularity}</span>
          </p>
          <p className="m-movie-info__releaseDate">
            <span>ReleaseDate:</span>
            <span>{releaseDate}</span>
          </p>
          <p className="m-movie-info__imdbId">
            <span>IMDB Id:</span>
            <span>{imDbId}</span>
          </p>
          <p className="m-movie-info__overview">
            <span>Overview:</span>
            <span>{overview}</span>
          </p>
        </div>
      </Section>
    </div>
  );
};
