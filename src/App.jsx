import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';

import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import Admin from './features/AdminPanel/Admin';

import AppLayout from './ui/AppLayout';
import Customer from './features/AdminPanel/Customer';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },

      {
        path: '/adminpanel',
        element: <Admin />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/adminPanel/customer',
        element: <Customer />,
        // loader: menuLoader,
        errorElement: <Error />,
      },
    ],

  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
