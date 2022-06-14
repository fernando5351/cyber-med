import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import Home from './pages/home'
import Medicinas from './pages/medicinas';
import Agregar from './pages/agregar-tipo'

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" name='Login' element={<Login />} />
          <Route path="/home" name='home' element={<Home />} />
          <Route path="/medicinas/agregar" element={<Agregar />} />
          <Route path="/medicinas" name='medicinas' element={<Medicinas />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;