import { createBrowserRouter, Outlet, Footer, NavBar, Home, Products, Product } from "../utils/exports"

const Layout = ()=>{
  return(
    <div className="app">
      <NavBar/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Layout/>
    ),
    children:[
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
    ]
  },

]);

export default router;
