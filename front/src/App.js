import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Empresa from "./pages/empresa/Empresa";
import Medicinas from "./pages/medicinas";
import Agregar from "./pages/agregar-tipo";
import Vistauso from "./pages/vistauso/Vistauso";
import Create from "./pages/create/Create";
import Modificacionmed from "./pages/modificacionmed/Modificacionmed";
import VistaProducto from "./pages/vistamed/VistaProducto";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" name="Login" element={<Login />} />
          <Route path="/home" name="Home" element={<Home />} />
          <Route path="/Empresa" name="empresa" element={<Empresa />} />
          <Route path="/medicinas" name="medicinas" element={<Medicinas />} />
          <Route
            path="/medicinas/agregar"
            name="agregarTipo"
            element={<Agregar />}
          />
          <Route path="/vistauso" name="VistaUso" element={<Vistauso />} />
          <Route path="/create" name="Create" element={<Create />} />
          <Route
            path="/modificaciones"
            name="agregarTipo"
            element={<Modificacionmed />}
          />
          <Route
            path="/vistaproducto"
            name="Vistaproducto"
            element={<VistaProducto />}
          />
          <Route path="/home" element={App} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
