import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/home";
import Product from "../pages/Product/product";
import Products from "../pages/Products/products";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>
    ),
  },
  {
    path: "/product/:id",
    element: <Product/>,
  },
  {
    path: "/products/:id",
    element: <Products/>,
  },
]);

export default router;
