import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Collapse from './Collapse';

function LogementInfo ({logement}){

  const [firstname, surname] = logement.host.name.split(" ");

    return (
        <>  
           <div className="info-container">
      <div className="info-header-container">
        <div className="left-info">
          <h1 className="logement-name">{logement.title}</h1>
          <span className="logement-location"> </span>
          <div className="logement-tags">
              {logement.tags.map((tag, index) => (
                    <div className="tag" key={index}>{tag}</div>
                ))}
          </div>
        </div>

        <div className="right-info">
          <div className="logement-proprio">
            <span className="proprio-name"> {firstname} <br /> {surname}</span>
            <div className="proprio-img-container" style={{backgroundImage: `url(${logement.host.picture})`}}></div>
          </div>
          <div className="rating">
              {Array.from({ length: 5 }, (_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                style={{
                  color: i < logement.rating ? '#FF6060' : '#E3E3E3',
                  fontSize: '30px',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="info-main-container">
        <div className="left-main">

          <Collapse title="Description" content={<p>{logement.description}</p>} />

        </div>

        <div className="right-main">
        
        <Collapse title="Équipements" content={
          <ul className="equipments">
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        } />

        </div>
      </div>
    </div>


        </>
    )
}

export default LogementInfo;



