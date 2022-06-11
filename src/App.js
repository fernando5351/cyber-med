import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Medicinas from './pages/medicinas';
import Login from './pages/login'
import Home from './pages/home'
import Navbar from './components/navegacion/Navbar'



const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" name='Login' element={<Navbar />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;