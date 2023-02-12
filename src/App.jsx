import React, { useEffect, useState } from 'react';

import './index.css';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Router from './Router';




function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/publiclogements.json');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    
    //Initial Content
    <div className="App">
        <>       
        <Header />         
        <Router data={data} />
        <Footer />
        </>
        

    </div>
  );


 
}

export default App;
