import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./views/login";
import Home from "./views/home";
import Create from "./views/tipo_uso/context/Create.jsx" 
import Empresa from "./views/form-empresa/context/Table";
import FormEmpresa from "./views/form-empresa/context/Create";
import FormEditEmpresa from "./views/form-empresa/context/Editempresa";
import Medicinas from "./views/medicinas/Btnvistauso";
import CrateMed from "./views/productos/context/Create";
import TipoUso from "./views/tipo_uso/create";
import Update from "./views/productos/context/UpdateProduct";
import NotFound from "./views/NotFound/NotFound";
import TipoConsumo from "./views/tipo-consumo/context/TipoConsumo";
import TableUso from "./views/tipo_uso/context/TableContext";
import FormUso from "./views/tipo-consumo/context/FormConsumo";
import Edituso from "./views/tipo_uso/context/Edit"
import Edit from "./views/tipo-consumo/context/EditForm";
import Table from "./views/productos/context/table";
/* import Table from "./views/tipo-consumo/Table"; */


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
          {/* Formulario para crear empresa */}
          <Route path="/empresa/crear" name="formepresa" element={< FormEmpresa/>} />
          {/* Formulario para editar la empresa */}
          <Route path="/empresa/editar" name="FormEditEmpresa" element={<FormEditEmpresa /> } />
          {/* vista productos */}
          <Route path="/view-products" name="FormEditEmpresa" element={ <Table /> } />
          {/* vista para ver los Medicamentos */}
          {/* <Route path="/vistauso" name="medicinas" element={<Medicamentos />} /> */}
          {/* crear tipo de uso */}
          <Route path="/crear-uso" name="uso" element={<Create/>} />
          {/* crear un nuevo Medicamento */}
          <Route path="/medicinas/crear" name="medicinas" element={<CrateMed />} />
          {/* actualizar un Medicamento */}
          <Route path="/medicinas/actualizar-product" name="medicinas" element={<Update />} />
          {/* listar tipo de consumo */}
          <Route path="/medicinas/listar-consumo" name="medicinas" element={<TipoConsumo />} />
          {/* editar un tipo de consumo */}
          <Route path="/medicinas/crear-consumo" name="medicinas" element={<FormUso />} />
          {/* editar un tipo de consumo */}
          <Route path="/medicinas/editar/categoria/consumo" name="medicinas" element={<Edit />} />
          {/* listar tipo de uso */}
          <Route path="/medicinas/listar-uso" name="medicina" element={<TableUso />} />
          {/* editar tipo uso */}
          <Route path="/edit/uso" name="tipo_uso" element={<Edituso />} />
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
