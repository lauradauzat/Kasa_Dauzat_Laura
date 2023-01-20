import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
//import { BrowserRouter } from "react-router-dom"
import './index.css';
//import App from './App';
import './App.css';

import Logement from './components/Logement';
import Home from './components/Home';
import Error from './components/Error';
import reportWebVitals from './reportWebVitals';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "logement",
    element: <Logement />,
  },
  {
    path: "about",
    element: <About />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <script src="https://kit.fontawesome.com/44a9982843.js" crossOrigin="anonymous"></script>
   {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
