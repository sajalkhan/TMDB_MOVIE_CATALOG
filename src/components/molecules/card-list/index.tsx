import { Card, cardProps } from 'components/atoms/card';
import { Heading } from 'components/atoms/heading';
import { Loading } from 'components/atoms/loading';
import React from 'react';

interface cardListProps {
  title: string;
  size: 'small' | 'medium' | 'large';
  movies: cardProps[];
  isLoading?: boolean;
  error?: {
    message: string;
  };
}

export const CardList: React.FC<cardListProps> = ({ movies, title, size = 'medium', isLoading, error }) => {
  return (
    <div className="m-card-list">
      <Heading>{title}</Heading>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Heading tag="h3">{error.message}</Heading>
      ) : (
        <div className="m-card-list__items">
          {movies.map((item: cardProps) => {
            return (
              <a href="#" key={item.id}>
                <Card id={item.id} imgUrl={item.imgUrl} modifiers={size} />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
