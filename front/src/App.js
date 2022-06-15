<<<<<<< HEAD
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Medicinas from "./pages/medicinas";
import Login from "./pages/login";
import VistaMed from "./pages/vistamed/VistaMed.jsx";
=======
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import Home from './pages/home'
import Medicinas from './pages/medicinas';
import Agregar from './pages/agregar-tipo'
import Vistauso from './pages/vistauso/Vistauso';
>>>>>>> 7230889b0dceae51b5b0109dee21894cc5fb0f87

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
<<<<<<< HEAD
          <Route path="/" name="Login" element={<Login />} />
          <Route path="/home" name="home" element={<Home />} />
          <Route path="/medicinas" name="medicinas" element={<Medicinas />} />
          <Route path="/vistamed" name="vistamed" element={<VistaMed />} />
=======
          <Route path="/home" name='Home' element={<Home />} />
          
>>>>>>> 7230889b0dceae51b5b0109dee21894cc5fb0f87
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
