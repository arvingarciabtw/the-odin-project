import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/game', element: <Game /> },
      { path: '/leaderboard', element: <Leaderboard /> },
    ],
  },
];

export default routes;
