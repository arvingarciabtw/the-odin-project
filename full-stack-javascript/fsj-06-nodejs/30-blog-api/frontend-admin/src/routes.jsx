import App from './App';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Error from './pages/Error';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/blogs/:id',
        element: <BlogPost />,
      },
    ],
  },
];

export default routes;
