import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Medicinas from './pages/medicinas'
import Agregar from './pages/agregar-tipo'
import Vistauso from './pages/vistauso/Vistauso'
import Forms from './components/forms/formtipouso'
import Modificacionmed from './pages/modificacionmed/Modificacionmed';
import Empresa from './pages/empresa/Empresa'


const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
        
          <Route path="/" name='Login' element={<Login />} />
          <Route path='/Empresa' name='empresa' element={<Empresa/>}/>
          <Route path="/home" name='Home' element={<Home />} />
          <Route path="/medicinas" name='medicinas' element={<Medicinas />} />
          <Route path="/medicinas/agregar" name='agregarTipo' element={<Agregar />} />
          <Route path="/medicinas/agregar/categoria" name='agregarTipo' element={<Forms />} />
          <Route path="/vistauso" name='Home' element={<Vistauso />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
