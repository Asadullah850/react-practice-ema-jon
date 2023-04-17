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
import cartProductsLoader from './cartOriductsLoader';
import Checkout from './Checkout';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import AuthPrevious from './components/Previous/AuthPrevious';
import PrivetRoute from './components/PrivetRoute';

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
                element:<PrivetRoute><Inventory/></PrivetRoute>,
            },
            {
                path:'registration',
                element:<RegistrationForm/>,
            },
            {
                path:'checkout',
                element:<PrivetRoute><Checkout/></PrivetRoute>,
            },
            {
                path:'login',
                element:<LoginForm/>,
            },
        ]
    },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthPrevious>
        <RouterProvider router={router}></RouterProvider>
    </AuthPrevious>
)
