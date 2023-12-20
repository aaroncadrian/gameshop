import { RouteObject } from 'react-router-dom';
import { App } from './app';
import { GameSummaryPage } from './features/feature-game-summary/game-summary-page';

export const APP_ROUTES: RouteObject[] = [
  {
    index: true,
    element: <App />,
  },
  {
    path: 'game-summary',
    element: <GameSummaryPage />,
  },
];
