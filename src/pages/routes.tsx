import { Loading } from 'components/atoms/loading';
import { ROUTES } from 'constants/routes';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const Genre = lazy(() => import('pages/genre'));
const MovieDetails = lazy(() => import('pages/movie-details'));
const WatchList = lazy(() => import('pages/watch-list'));

export const PagesRoutes: React.FC = () => (
  <Suspense fallback={<Loading overlay />}>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.MOVIES} element={<Genre />} />
      <Route path={ROUTES.WATCH_LIST} element={<WatchList />} />
      <Route path={ROUTES.MOVIES_DETAILS} element={<MovieDetails />} />
      <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
    </Routes>
  </Suspense>
);
