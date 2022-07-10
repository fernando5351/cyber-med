import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Medicinas from "./pages/medicinas";
import Agregar from "./pages/agregar-tipo";
import Vistauso from "./pages/vistauso/Vistauso";
import Forms from "./components/forms/formtipouso";
import Proveedor from "./pages/proveedor/Proveedor";
import VistaProducto from "./pages/vistamed/VistaProducto";
import Create from "./pages/create/Create";
import Modificacionmed from "./pages/modificacionmed/Modificacionmed";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" name="Login" element={<Login />} />
          <Route path="/home" name="Home" element={<Home />} />
          <Route path="/medicinas" name="medicinas" element={<Medicinas />} />
          <Route
            path="/medicinas/agregar"
            name="agregarTipo"
            element={<Agregar />}
          />
          <Route
            path="/medicinas/agregar/categoria"
            name="agregarTipo"
            element={<Forms />}
          />
          <Route path="/create" name="create" element={<Create />} />
          <Route
            path="/modificacionmed"
            name="modificacionmed"
            element={<Modificacionmed />}
          />
          <Route
            path="/vistaproducto"
            name="vistaproducto"
            element={<VistaProducto />}
          />
          <Route path="/vistauso" name="Home" element={<Vistauso />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
