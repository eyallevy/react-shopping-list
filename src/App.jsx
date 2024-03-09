import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage, {loader as productsLoader} from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';
import ProductEditPage from './pages/ProductEdit';
import ProductNewPage from './pages/ProductNew';
import ProductsRootLayout from './pages/ProductsRoot';

const router = createBrowserRouter ([
  { 
      path: "/" ,
      element: <RootLayout />,
      errorElement: <ErrorPage/>,
      children: [
        { index: true , element: <HomePage /> },
        { 
          path: 'products',
          element: <ProductsRootLayout/> ,
          children: [
            { index: true , 
              element: <ProductsPage /> , 
              loader: productsLoader
            },
            { path: ':productId' , element: <ProductDetailPage /> },
            { path: 'new' , element: <ProductNewPage /> },
            { path: ':productId/edit' , element: <ProductEditPage /> },
          ],
        },  
      ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;