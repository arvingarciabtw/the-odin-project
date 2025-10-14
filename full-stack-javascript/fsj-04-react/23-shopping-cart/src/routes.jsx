import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import Error from './pages/Error.jsx';

const router = [
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
];

export default router;
