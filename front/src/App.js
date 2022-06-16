import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import Home from './pages/home'
import Medicinas from './pages/medicinas';
import Vistauso from './pages/vistauso/Vistauso';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>  
        <Routes>
          <Route path="/" name='Login' element={<Login />} />
          <Route path="/home" name='Home' element={<Home />} />
          <Route path="/medicinas" name='Medicinas' element={<Medicinas />} />
          <Route path="/vistauso" name='Vistauso' element={<Vistauso />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;