import * as Sentry from '@sentry/react';
import { UseGetGenres } from 'api/useGetGenres';
import { Dropdown } from 'components/atoms/dropdown';
import { Loading } from 'components/atoms/loading';
import { Navigation } from 'components/atoms/navigation';
import { ROUTES } from 'constants/routes';
import { useMoviesState } from 'contexts/movies';
import GlobalError from 'pages/global-error';
import { PagesRoutes } from 'pages/routes';
import React from 'react';
import { useIsMutating } from 'react-query';
import { Link } from 'react-router-dom';

type Genres = {
  id: string;
  name: string;
};

const App: React.FC = () => {
  const watchList = useMoviesState();
  const isMutating = useIsMutating();
  const { data, isSuccess } = UseGetGenres();

  return (
    <>
      <Navigation>
        <Dropdown>
          {isSuccess &&
            data.map((item: Genres) => {
              return (
                <Link key={item.id} to={`/genre/${item.id}`} state={{ genre: `${item.name}` }}>
                  {item.name}
                </Link>
              );
            })}
        </Dropdown>
        <Link to={ROUTES.WATCH_LIST}>Favorite ({watchList.length})</Link>
      </Navigation>
      <Sentry.ErrorBoundary fallback={({ error, resetError }) => <GlobalError error={error} onReset={resetError} />}>
        <PagesRoutes />
        {!!isMutating && <Loading overlay />}
      </Sentry.ErrorBoundary>
    </>
  );
};

export default App;
