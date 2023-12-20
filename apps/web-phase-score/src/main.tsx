import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { APP_ROUTES } from './app/app-routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(APP_ROUTES);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
