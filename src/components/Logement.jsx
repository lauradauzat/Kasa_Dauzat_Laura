import { useParams } from 'react-router-dom';
import Header from './Header'
import LogementInfo from './LogementInfo';
import data from '../logements.json'; 

function Logement () {

    const {id} = useParams()
    const thisHouse = data.find(item => item.id === id);
    console.log(thisHouse);


    return (
        <>  
            <Header />
            <div className="caroussel logement" style={{backgroundImage: `url(${thisHouse.cover})`}} >
                <img src="./chevron-left.png" alt="" srcSet="" />
                <img src="./chevron-right.png" alt="" srcSet="" />
            </div>

            <LogementInfo logement={thisHouse} />


        </>
    )
}

export default Logement;