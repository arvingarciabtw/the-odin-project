import App from './App';
import Error from './pages/Error';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import SignUpForm from './components/SignUpForm';
import Profile from './pages/Profile';
import ChatPage from './pages/ChatPage';

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
        children: [
          { path: '/profile', element: <Profile /> },
          { path: '/chats/:id', element: <ChatPage /> },
        ],
      },
    ],
  },
];

export default routes;
