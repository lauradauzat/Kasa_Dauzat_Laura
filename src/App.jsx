import React from 'react';

import {
  Route,
  RouterProvider, Routes
} from "react-router-dom";



import './index.css';
import './App.css';


import Footer from './components/Footer';
import router from './components/Router';
import Logement from './components/Logement';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Error from './components/Error';
import data from '../src/logements.json'




function App() {


  return (
    
    //Initial Content
    <div className="App">
        <>       
      {/*      
        <RouterProvider  router={router}>
        </RouterProvider> */}

        <Header />         

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="logement/:id" element={<Logement />} />
          <Route path="/about" element={<About />}  />
          <Route path="/*" element={<Error />} />

        </Routes>
      
        <Footer />
        </>
        

    </div>
  );


 
}

export default App;
