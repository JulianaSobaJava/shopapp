import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home/home";
import Product from "../pages/Product/product";
import Products from "../pages/Products/products";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  RouterProvider,
} from "react-router-dom";
import router from '../routes/route';
import * as Icon from '@mui/icons-material';


export { createBrowserRouter, Outlet, Footer, NavBar, Home, Products, Product,RouterProvider,router, Icon};
