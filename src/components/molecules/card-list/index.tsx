import { Card, cardProps } from 'components/atoms/card';
import { Heading } from 'components/atoms/heading';
import { Loading } from 'components/atoms/loading';
import React from 'react';

interface cardListProps {
  size?: 'small' | 'medium' | 'large';
  movies: cardProps[];
  isLoading?: boolean;
  error?: {
    message: string;
  };
}

export const CardList: React.FC<cardListProps> = ({ movies, size = 'medium', isLoading, error }) => {
  return (
    <div className="m-card-list">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Heading tag="h3">{error.message}</Heading>
      ) : (
        <div className="m-card-list__items">
          {movies.map((item: cardProps) => {
            return <Card key={item.id} id={item.id} movieName={item.movieName} imgUrl={item.imgUrl} modifiers={size} />;
          })}
        </div>
      )}
    </div>
  );
};
