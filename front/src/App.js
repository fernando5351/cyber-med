import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import Home from './pages/home';
import Medicinas from './pages/medicinas';
import Formuso from './components/forms/formtipouso';
import Agregar from './pages/agregar-tipo'
import Vistauso from './pages/vistauso/Vistauso';
import Modificacionmed from './pages/modificacionmed/Modificacionmed';
import Empresa from './pages/empresa/Empresa';
import Create from './pages/create/Create';
import VistaProducto from './pages/vistamed/VistaProducto';


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
          <Route path="/medicinas/editar/categoria" name='Home' element={<Formuso />} />
          <Route path="/vistauso" name='Home' element={<Vistauso />} />
          <Route path="/Create" name='create' element={<Create />} />
          <Route path="/VistaProducto" name='vistaProducto' element={<VistaProducto />} />

        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;