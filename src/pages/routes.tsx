import { Loading } from 'components/atoms/loading';
import { ROUTES } from 'constants/routes';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const Genre = lazy(() => import('pages/genre'));

export const PagesRoutes: React.FC = () => (
  <Suspense fallback={<Loading overlay />}>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.MOVIES} element={<Genre />} />
      <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
    </Routes>
  </Suspense>
);
