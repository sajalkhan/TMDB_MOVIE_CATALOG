/* eslint-disable react/react-in-jsx-scope */
import * as Sentry from '@sentry/react';
import { MoviesContextProvider } from 'contexts/movies';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/App';
import './styles/index.scss';
const queryClient = new QueryClient();

Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  // integrations: [new BrowserTracing()],
  // tracesSampleRate: 1.0,
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <MoviesContextProvider>
      <Router>
        <App />
      </Router>
    </MoviesContextProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById('root')
);
