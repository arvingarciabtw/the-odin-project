import App from './App';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Error from './pages/Error';

const router = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/log-in',
    element: <LoginPage />,
    errorElement: <Error />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
    errorElement: <Error />,
  },
];

export default router;
