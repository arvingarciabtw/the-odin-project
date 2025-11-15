import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Profile from './pages/Profile';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <LoginForm /> },
      { path: '/sign-up', element: <SignUpForm /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
];

export default routes;
