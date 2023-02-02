import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Collapse (props) {
    const { title, content } = props;
    const [isOpen, setOpen] = useState(false);

    function handleToggle(event) {
        setOpen(!isOpen);
    }
    
    return (
      <div className="toggle-container">
        <h2>{title} <FontAwesomeIcon icon={faChevronDown} onClick={handleToggle} className={`${isOpen ? 'open' : ''}`} /></h2>
        <div className="toggle-content" style={{display: isOpen ? 'block' : 'none' }} >
          {content}
        </div>
      </div>
    );
  }
  
export default Collapse; 