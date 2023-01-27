import Header from './Header'
import LogementInfo from './LogementInfo';

function Logement () {
    return (
        <>  
            <Header />
            <div className="caroussel logement">
                <img src="./chevron-left.png" alt="" srcset="" />
                <img src="./chevron-right.png" alt="" srcset="" />
            </div>

            <LogementInfo />


        </>
    )
}

export default Logement;