import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronDown } from '@fortawesome/free-solid-svg-icons'


function LogementInfo () {
    return (
        <>  
           <div className="info-container">
      <div className="info-header-container">
        <div className="left-info">
          <h1 className="logement-name">Cozy loft on the Canal Saint-Martin</h1>
          <span className="logement-location"> Paris, Île-de-Fance</span>
          <div className="logement-tags">
            <div className="tag">
              Cozy
            </div>
            <div className="tag">
              Canal
            </div>
            <div className="tag">
              Paris 10
            </div>
          </div>
        </div>

        <div className="right-info">
          <div className="logement-proprio">
            <span className="proprio-name">Alexandre <br /> Dumas</span>
            <div className="proprio-img-container"></div>
          </div>
          <div className="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>

      <div className="info-main-container">
        <div className="left-main">
          <div className="toggle-container">
            <h2>Description    <FontAwesomeIcon icon={faChevronDown} /></h2>
            <div className="toggle-content">
              <p>
                Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).
              </p>
            </div>
          </div>
        </div>

        <div className="right-main">
          <div className="toggle-container">
            <h2>Équipements  <FontAwesomeIcon icon={faChevronDown} /></h2>
            <div className="toggle-content">
              <li className="equipements">
                <ul>Climatisation</ul>
                <ul>Wi-fi</ul>
                <ul>Cuisine</ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>


        </>
    )
}

export default LogementInfo;



