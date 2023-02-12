import { useParams } from 'react-router-dom';

import LogementInfo from '../components/LogementInfo';
import { useEffect, useState } from 'react';
import Error from './Error';
import Caroussel from '../components/Caroussel';


function Logement({data}) {
  const {id} = useParams();


        const  [thisHouse, setThisHouse]= useState(false);
        const [validId, setValidId] = useState(false);
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            setThisHouse(data.find(item => item.id === id));
            if (thisHouse) {
              setValidId(true);
            } 
          }, [thisHouse, id, data]);
      
        function handlePrev() {
          setCurrentIndex((currentIndex + thisHouse.pictures.length - 1) % thisHouse.pictures.length);
        }
      
        function handleNext() {
          setCurrentIndex((currentIndex + 1) % thisHouse.pictures.length);
        }

        if (!validId) {
            return <Error />;
          }


    return (
        <>  
         
         <Caroussel pictures={thisHouse.pictures} currentIndex={currentIndex} handlePrev={handlePrev} handleNext={handleNext} />
          <LogementInfo logement={thisHouse} />


        </>
    )
}

export default Logement;