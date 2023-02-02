import { Link } from 'react-router-dom';
import Header from './Header'
function Error() {
    return (
      <>
   
        <main>
          <div className="error-main-container">
            <div className="error-container">
              <p className="text-404">404</p>
              <p>Oups! La page que vous demandez n'existe pas</p>
            </div>
            <div className="return-link">
              <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
          </div>
        </main>
      </>

    );
  }
  
export default Error;   