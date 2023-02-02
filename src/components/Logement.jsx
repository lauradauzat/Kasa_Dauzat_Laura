import { useParams } from 'react-router-dom';
import Header from './Header'
import LogementInfo from './LogementInfo';
import data from '../logements.json'; 
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


function Logement () {

    const {id} = useParams()
    const thisHouse = data.find(item => item.id === id);
    console.log(thisHouse);

   
        const [currentIndex, setCurrentIndex] = useState(0);
      
        function handlePrev() {
          setCurrentIndex((currentIndex + thisHouse.pictures.length - 1) % thisHouse.pictures.length);
        }
      
        function handleNext() {
          setCurrentIndex((currentIndex + 1) % thisHouse.pictures.length);
        }


    return (
        <>  
            <Header />
            <div className="caroussel logement" style={{backgroundImage:  `url(${thisHouse.pictures[currentIndex]})`}} >
                { thisHouse.pictures.length > 1 && 
                    <>
                        <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrev} />
                        <FontAwesomeIcon icon={faChevronRight} onClick={handleNext} />
                    </>
                }
            </div>

            <LogementInfo logement={thisHouse} />


        </>
    )
}

export default Logement;