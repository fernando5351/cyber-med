import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/login";
import Home from "./views/home"
import Empresa from "./views/empresa"
import Medicinas from "./views/medicinas" 
import Medicamentos from "./views/vistaMedicamento/Vistauso"
import CrateMed from "./views/productos/Create"
import UpdateMed from "./views/productos/update"
import Consumo from "./views/tipo-consumo/create"
import EditConsumo from "./views/tipo-consumo/edit"
import TablaConsumo from "./views/medicinas/tablaMedicinas"
import TipoUso from "./views/tipo_uso/create"
import NotFound from "./views/NotFound/NotFound";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          {/* login */}
          <Route path="/" name="medicinas" element={<Login />} />
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
          <Route path="/medicinas/actualizar" name="medicinas" element={<UpdateMed />} />
          {/* agregar un tipo de consumo */}
          <Route path="/medicinas/agregar/categoria/consumo" name="medicinas" element={<Consumo />} />
          {/* editar un tipo de consumo */}
          <Route path="/medicinas/editar/categoria/consumo" name="medicinas" element={<EditConsumo />} />
          {/* tabla para medicamentos */}
          <Route path="/medicinas/tabla" name="medicinas" element={<TablaConsumo />} />
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
