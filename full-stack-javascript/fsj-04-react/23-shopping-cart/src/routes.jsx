import App from './App';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Error from './pages/Error';

const router = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];

export default router;
