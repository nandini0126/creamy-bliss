import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './views/Product/Product';
import ProductView from './views/ProductView/ProductView';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products",
    element: <Product />
  },
  {
    path: "/productview/:id",
    element: <ProductView />
  }
])

root.render(<RouterProvider router={router} />);
