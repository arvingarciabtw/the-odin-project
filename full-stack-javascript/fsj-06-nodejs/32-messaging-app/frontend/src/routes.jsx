import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import SignUpForm from './components/SignUpForm';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/sign-up', element: <SignUpForm /> },
      {
        element: <ProtectedRoute />,
        children: [{ path: '/profile', element: <Profile /> }],
      },
    ],
  },
];

export default routes;
