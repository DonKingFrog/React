import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colors.css';
import {Home, Marketplace, Blog, Contact, Newsroom, Product, Discord, About, FAQ, Services} from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route  } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/marketplace",
    element: <Marketplace />,
  },

  {
    path: "/product/:productId",
    element: <Product />
  },

  {
    path: "/blog",
    element: <Blog />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/newsroom/:postId",
    element: <Newsroom />,
  },

  {
    path: "/about",
    element: <About />
  },

  {
    path: "/faq",
    element: <FAQ />
  },

  {
    path: "/discord",
    element: <Discord />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
