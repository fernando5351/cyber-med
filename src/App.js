import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./views/login";
import Home from "./views/home";
import Create from "./views/tipo_uso/context/Create.jsx" 
import Empresa from "./views/form-empresa/context/Table";
import FormEmpresa from "./views/form-empresa/context/Create";
import FormEditEmpresa from "./views/form-empresa/context/Editempresa";
import Lote from "./views/form-lote/context/table.jsx";
import FormLote from "./views/form-lote/context/Create";
import FormEditLote from "./views/form-lote/context/Edit";
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
import {ProtectedRoute} from "../src/routes/routeController"

const App = () => {
  
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          {/* login */}
          <Route path="/" name="login" element={<Login />} />
          {/* home */}
          <Route path="/home" name="home" element={
            <ProtectedRoute >
              <Home />
            </ProtectedRoute>
          } />
          {/* vista de proveedores */}
          <Route path="/empresa" name="medicinas" element={
            <ProtectedRoute >
              <Empresa />
            </ProtectedRoute>
          } />
          {/* vista Lote */}
          <Route path="/empresa/lote" name="lote" element={
            <ProtectedRoute >
              <Lote />
            </ProtectedRoute>
          } />
          {/* Formulario para crear Lote */}
          <Route path="/empresa/lote/crear-lote" name="lote" element={
            <ProtectedRoute >
              <FormLote />
            </ProtectedRoute>
          }/>
          {/* Formulario para editar Lote */}
          <Route path="/empresa/lote/editar-lote" name="lote" element={
            <ProtectedRoute >
              <FormEditLote />
            </ProtectedRoute >
          } />
          {/* vista de tags medicinas */}
          <Route path="/medicinas" name="medicinas" element={
            <ProtectedRoute>
              <Medicinas />
            </ProtectedRoute>
          } />
          {/* Formulario para crear empresa */}
          <Route path="/empresa/crear" name="formepresa" element={
            <ProtectedRoute>
              < FormEmpresa/>
            </ProtectedRoute>
          } />
          {/* Formulario para editar la empresa */}
          <Route path="/empresa/editar" name="FormEditEmpresa" element={
            <ProtectedRoute>
              <FormEditEmpresa />
            </ProtectedRoute>
          } />
          {/* vista productos */}
          <Route path="/view-products" name="FormEditEmpresa" element={
            <ProtectedRoute>
              <Table /> 
            </ProtectedRoute>
          } />
          {/* vista para ver los Medicamentos */}
          {/* <Route path="/vistauso" name="medicinas" element={<Medicamentos />} /> */}
          {/* crear tipo de uso */}
          <Route path="/crear-uso" name="uso" element={
            <ProtectedRoute >
              <Create/>
            </ProtectedRoute>
          } />
          {/* crear un nuevo Medicamento */}
          <Route path="/medicinas/crear" name="medicinas" element={
            <ProtectedRoute >
              <CrateMed />
            </ProtectedRoute>
          } />
          {/* actualizar un Medicamento */}
          <Route path="/medicinas/actualizar-product" name="medicinas" element={
            <ProtectedRoute >
              <Update />
            </ProtectedRoute>
          } />
          {/* listar tipo de consumo */}
          <Route path="/medicinas/listar-consumo" name="medicinas" element={
            <ProtectedRoute >
              <TipoConsumo />
            </ProtectedRoute>
          } />
          {/* editar un tipo de consumo */}
          <Route path="/medicinas/crear-consumo" name="medicinas" element={
            <ProtectedRoute >
              <FormUso />
            </ProtectedRoute>
          } />
          {/* editar un tipo de consumo */}
          <Route path="/medicinas/editar/categoria/consumo" name="medicinas" element={
            <ProtectedRoute >
              <Edit />
            </ProtectedRoute>
          } />
          {/* listar tipo de uso */}
          <Route path="/medicinas/listar-uso" name="medicina" element={
            <ProtectedRoute >
              <TableUso />
            </ProtectedRoute>
          } />
          {/* editar tipo uso */}
          <Route path="/edit/uso" name="tipo_uso" element={
            <ProtectedRoute >
              <Edituso />
            </ProtectedRoute>
          } />
          {/* crear un tipo de uso del medicamento */}
          <Route path="/medicinas/editar/categoria/uso" name="medicinas" element={
            <ProtectedRoute >
              <TipoUso />
            </ProtectedRoute>
          } />
          {/* PAGE NOT FOUND */}
          <Route path="*" name="error404" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
