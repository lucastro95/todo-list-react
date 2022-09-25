import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import PokeAPI from '../pages/PokeAPI';
import Home from '../pages/ToDo/ToDo';

function Routes() {
    return (
      <ReactDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/PokeAPI' element={<PokeAPI />} />
        <Route path='/*' element={<PageNotFound />} />
      </ReactDomRoutes>
    );
  }
  
  export default Routes;