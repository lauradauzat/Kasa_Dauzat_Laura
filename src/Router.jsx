import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Logement from './pages/Logement';


function Router( {data}) {

   

 return (
  <Routes>
    <Route path="/"  element={<Home data={data} />}  />
    <Route path="logement/:id"  element={<Logement  data={data} />} />
    <Route path="/about" element={<About />} />
    <Route path="/*" element={<Error />} />
  </Routes>
);
} 

export default Router;