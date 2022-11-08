import { Button } from 'components/atoms/button';
import { Card, cardProps } from 'components/atoms/card';
import { Loading } from 'components/atoms/loading';

import React from 'react';

interface cardListProps {
  size?: 'small' | 'medium' | 'large';
  movies: cardProps[];
  isLoading?: boolean;
  onClick?: (id: string | number | undefined, imgUrl: string, movieName: string) => void;
}

export const CardList: React.FC<cardListProps> = ({ movies, size = 'medium', isLoading, onClick }) => {
  if (isLoading) return <Loading />;

  return (
    <div className="m-card-list">
      <div className="m-card-list__items">
        {movies.map((item: cardProps) => {
          return (
            <Card key={item.id} id={item.id} movieName={item.movieName} imgUrl={item.imgUrl} modifiers={size}>
              <Button onClick={() => onClick && onClick(item.id, item.imgUrl, item.movieName)} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};
