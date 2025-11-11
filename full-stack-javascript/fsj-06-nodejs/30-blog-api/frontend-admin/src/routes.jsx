import App from './App';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Error from './pages/Error';
import AddPostForm from './components/AddPostForm';

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
      {
        path: '/create-post',
        element: <AddPostForm />,
      },
    ],
  },
];

export default routes;
