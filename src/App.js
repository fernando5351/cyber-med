import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./views/login";
import Home from "./views/home";
import Empresa from "./views/empresa";
import Medicinas from "./views/medicinas";
import Medicamentos from "./views/vistaMedicamento/Vistauso";
import CrateMed from "./views/productos/context/Create";
import TipoUso from "./views/tipo_uso/create";
import Update from "./views/productos/update";
import NotFound from "./views/NotFound/NotFound";
import TipoConsumo from "./views/tipo-consumo/context/TipoConsumo";
import TableUso from "./views/tipo_uso/Table";
import FormUso from "./views/tipo-consumo/context/FormUso";
import Edit from "./views/tipo-consumo/context/EditForm";


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
          <Route path="/medicinas/crear-consumo" name="medicinas" element={<FormUso />} />
          {/* editar un tipo de consumo */}
          <Route path="/medicinas/editar/categoria/consumo" name="medicinas" element={<Edit />} />
          {/* listar tipo de uso */}
          <Route path="/medicinas/listar-uso" name="medicina" element={<TableUso />} />
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
