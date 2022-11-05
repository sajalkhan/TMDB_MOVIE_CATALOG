import { Card, cardProps } from 'components/atoms/card';
import { Loading } from 'components/atoms/loading';
import React from 'react';
import { Link } from 'react-router-dom';

interface cardListProps {
  size?: 'small' | 'medium' | 'large';
  movies: cardProps[];
  isLoading?: boolean;
}

export const CardList: React.FC<cardListProps> = ({ movies, size = 'medium', isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="m-card-list">
      <div className="m-card-list__items">
        {movies.map((item: cardProps) => {
          return (
            <Link to={`/movies/${item.id}`} key={item.id} className="m-card-list__link">
              <Card id={item.id} movieName={item.movieName} imgUrl={item.imgUrl} modifiers={size} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
