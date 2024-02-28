import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/sass/style.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Page from './routes/Page';
import Poste from './routes/Poste.tsx';
import Results from './routes/Results.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './components/Error.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary fallback={<p>Une erreur c'est produite</p>} />,
  },
  {
    path: '/poste/:slug',
    element: <Poste />,
    errorElement: <ErrorBoundary fallback={<p>Une erreur c'est produite</p>} />,
  },
  {
    path: '/resultats',
    element: <Results />,
    errorElement: <ErrorBoundary fallback={<p>Une erreur c'est produite</p>} />,
  },
  {
    path: '/:slug',
    element: <Page />,
    errorElement: <ErrorBoundary fallback={<p>Une erreur c'est produite</p>} />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  </StrictMode>,
);
