import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./views/login";
import Home from "./views/home";
import Empresa from "./views/empresa";
import Medicinas from "./views/medicinas";
import Medicamentos from "./views/vistaMedicamento/Vistauso";
import CrateMed from "./views/productos/Create";
import TipoUso from "./views/tipo_uso/create";
import Update from "./views/productos/update";
import NotFound from "./views/NotFound/NotFound";
import EditProduct from "./views/tipo-consumo/Formulario";
import TipoConsumo from "./views/tipo-consumo/TipoConsumo";
import FormUso from "./views/tipo-consumo/FormUso";


const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          {/* login */}
          <Route path="/" name="login" element={<Login />} />
          {/* home */}
          <Route path="/home" name="home" element={<Home />} />
          {/* vista de proveedores */}
          <Route path="/empresa" name="medicinas" element={<Empresa />} />
          {/* vista de tags medicinas */}
          <Route path="/medicinas" name="medicinas" element={<Medicinas />} />
          {/* vista para ver los Medicamentos */}
          <Route path="/vistauso" name="medicinas" element={<Medicamentos />} />
          {/* crear un nuevo Medicamento */}
          <Route path="/medicinas/crear" name="medicinas" element={<CrateMed />} />
          {/* actualizar un Medicamento */}
          <Route path="/medicinas/actualizar" name="medicinas" element={<Update />} />
          {/* listar tipo de consumo */}
          <Route path="/medicinas/listar-consumo" name="medicinas" element={<TipoConsumo />} />
          {/* editar un tipo de consumo */}
          <Route path="/medicinas/editar-consumo" name="medicinas" element={<FormUso />} />
          {/* editar un tipo de consumo */}
          <Route path="/medicinas/editar/categoria/consumo" name="medicinas" element={<EditProduct />} />
          {/* crear un tipo de uso del medicamento */}
          <Route path="/medicinas/editar/categoria/uso" name="medicinas" element={<TipoUso />} />
          {/* PAGE NOT FOUND */}
          <Route path="*" name="error404" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
