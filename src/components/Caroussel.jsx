import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Caroussel({ pictures, currentIndex, handlePrev, handleNext }) {
  return (
    <div className="caroussel logement" style={{ backgroundImage: `url(${pictures[currentIndex]})` }}>
      {pictures.length > 1 && (
        <>
          <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrev} />
          <FontAwesomeIcon icon={faChevronRight} onClick={handleNext} />
        </>
      )}
    </div>
  );
}

export default Caroussel;
