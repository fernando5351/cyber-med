import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
<<<<<<< HEAD:src/App.js
import Vistamed from './pages/vistamed/VistaMed.jsx'
=======
import Home from './pages/home'
import Medicinas from './pages/medicinas';
import Login from './pages/login';
>>>>>>> c954eb69c4e329f7aa627f7beb96a1f3597fc3e4:front/src/AppOriginal.js

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
<<<<<<< HEAD:src/App.js
        
          <Route path="/" name='vistamed' element={<Vistamed />} />
          
=======
          <Route path="/" name='Login' element={<Login />} />
          <Route path="/home" name='home' element={<Home />} />
          <Route path="/medicinas" name='medicinas' element={<Medicinas />} />
>>>>>>> c954eb69c4e329f7aa627f7beb96a1f3597fc3e4:front/src/AppOriginal.js
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;