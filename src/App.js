import React from 'react';

import {
  RouterProvider
} from "react-router-dom";



import './index.css';
import './App.css';


import Footer from './components/Footer';
import router from './components/Router';



function App() {



  return (
    
    //Initial Content
    <div className="App">
        <>       
     
        <RouterProvider router={router}>



        </RouterProvider>
      
        <Footer />
        </>
        

    </div>
  );


 
}

export default App;
