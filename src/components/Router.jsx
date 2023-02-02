import { createBrowserRouter } from 'react-router-dom';
import About from './About';
import Error from './Error';
import Home from './Home';
import Logement from './Logement';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "logement/:id",
      element: <Logement />,
      errorElement: <Error />,
    },
    {
      path: "about",
      element: <About />,
      errorElement: <Error />,
    },
  
  ]);

  export default router