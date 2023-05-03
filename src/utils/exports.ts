import { createBrowserRouter, Outlet,  RouterProvider,
  Link , useParams } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";

import router from '../routes/route';

import * as Icon from '@mui/icons-material';
import {dataImage, data} from "./mocks";
import {useState} from "react";

import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import List from "../components/List";


export { createBrowserRouter, Outlet, Footer, NavBar, Home, Products, Product,RouterProvider,router, Icon, Link,data,dataImage, Slider, useState, FeaturedProducts, Categories, Contact, useParams, Card, List};
