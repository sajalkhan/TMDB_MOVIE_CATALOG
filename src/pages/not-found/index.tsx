import { Heading } from 'components/atoms/heading';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="p-not-found">
      <div className="p-not-found__content">
        <Heading>404 Not Found</Heading>
      </div>
    </div>
  );
};

export default NotFound;
