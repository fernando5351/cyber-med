import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Medicinas from "./pages/medicinas";
import Login from "./pages/login";
import VistaMed from "./pages/vistamed/VistaMed.jsx";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" name="Login" element={<Login />} />
          <Route path="/home" name="home" element={<Home />} />
          <Route path="/medicinas" name="medicinas" element={<Medicinas />} />
          <Route path="/vistamed" name="vistamed" element={<VistaMed />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
