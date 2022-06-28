<<<<<<< HEAD
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Medicinas from "./pages/medicinas";
import Formuso from "./components/forms/formtipouso";
import Agregar from "./pages/agregar-tipo";
import Vistauso from "./pages/vistauso/Vistauso";
import Modificacionmed from "./pages/modificacionmed/Modificacionmed";
import Empresa from "./pages/empresa/Empresa";
import Create from "./pages/create/Create";
import VistaProducto from "./pages/vistamed/VistaProducto";
import Tableempresa from "./components/table/Tableempresa";
=======
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import Home from './pages/home';
import Medicinas from './pages/medicinas';
import Formuso from './components/formtipouso/formtipouso';
import Agregar from './pages/agregar-tipo'
import Vistauso from './pages/vistauso/Vistauso';
import Modificacionmed from './pages/modificacionmed/Modificacionmed';
import Proveedor from './pages/proveedor/Proveedor';
>>>>>>> parent of 2ebbc68 (se conrcto la base de datos con la  tabla de la vista empresa)

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
<<<<<<< HEAD
          <Route path="/" name="Login" element={<Login />} />
          <Route path="/home" name="Home" element={<Home />} />
          <Route
            path="/Modificacionmed"
            name="Modificacionmed"
            element={<Modificacionmed />}
          />
          <Route path="/medicinas" name="medicinas" element={<Medicinas />} />
          <Route
            path="/medicinas/agregar"
            name="agregarTipo"
            element={<Agregar />}
          />
          <Route
            path="/medicinas/agregar/categoria"
            name="Home"
            element={<Formuso />}
          />
          <Route
            path="/medicinas/editar/categoria"
            name="Home"
            element={<Formuso />}
          />
          <Route path="/vistauso" name="Home" element={<Vistauso />} />
          <Route path="/Create" name="create" element={<Create />} />
          <Route
            path="/VistaProducto"
            name="vistaProducto"
            element={<VistaProducto />}
          />
=======
          <Route path="/" name='Login' element={<Login />} />
          <Route path="/home" name='Home' element={<Home />} />
          <Route path="/medicinas" name='medicinas' element={<Medicinas />} />
          <Route path="/medicinas/agregar" name='agregarTipo' element={<Agregar />} />
          <Route path="/medicinas/agregar/categoria" name='Home' element={<Formuso />} />
          <Route path="/vistauso" name='Home' element={<Vistauso />} />
>>>>>>> parent of 2ebbc68 (se conrcto la base de datos con la  tabla de la vista empresa)
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;