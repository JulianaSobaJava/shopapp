import { createBrowserRouter, Outlet,  RouterProvider,
  Link  } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import router from '../routes/route';
import * as Icon from '@mui/icons-material';
import {data} from "./mocks";
import {useState} from "react";

import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";


export { createBrowserRouter, Outlet, Footer, NavBar, Home, Products, Product,RouterProvider,router, Icon, Link,data, Slider, useState, FeaturedProducts};
