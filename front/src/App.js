import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import Home from './pages/home';
import Proveedor from './pages/proveedor/Proveedor';
import Medicinas from './pages/medicinas';
import Formuso from './components/formtipouso/formtipouso';
import Agregar from './pages/agregar-tipo'
import Vistauso from './pages/vistauso/Vistauso';
import Modificacionmed from './pages/modificacionmed/Modificacionmed';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>  
        <Routes>
          <Route path="/" name='Login' element={<Login />} />
          <Route path="/home" name='Home' element={<Home />} />
          <Route path="/Modificacionmed" name='Modificacionmed' element={<Modificacionmed />} />
          <Route path="/medicinas" name='medicinas' element={<Medicinas />} />
          <Route path="/medicinas/agregar" name='agregarTipo' element={<Agregar />} />
          <Route path="/medicinas/agregar/categoria" name='Home' element={<Formuso />} />
          <Route path="/mod" name='Home' element={<Modificacionmed />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;