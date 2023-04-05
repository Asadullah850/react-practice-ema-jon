import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Shope from './components/Shope/Shope';
import Layout from './components/Layout';
import Order from './Order';
import Inventory from './Inventory';
import Login from './Login';
import cartProductsLoader from './cartOriductsLoader';

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Shope></Shope>,
            },
            {
                path:'orders',
                element:<Order/>,
                loader: cartProductsLoader,
            },
            {
                path:'inventory',
                element:<Inventory/>,
            },
            {
                path:'login',
                element:<Login/>,
            },
        ]
    },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
