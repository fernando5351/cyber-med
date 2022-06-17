import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import Home from './pages/home'
import Medicinas from './pages/medicinas';
import Agregar from './pages/agregar-tipo'
import Vistauso from './pages/vistauso/Vistauso';
import Modificacionmed from './pages/modificacionmed/Modificacionmed';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" name='Home' element={<Home />} />
          <Route path="/modificacionmed" name='Home' element={<Modificacionmed />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;