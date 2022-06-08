import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login';
import Medicinas from './pages/medicinas';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" name='Login' element={ <Login /> } />
          <Route path="/app" name='medicinas' element={ <Medicinas /> } />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;