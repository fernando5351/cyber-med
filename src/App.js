import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Vistamed from './pages/vistamed/VistaMed.jsx'

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
        
          <Route path="/" name='vistamed' element={<Vistamed />} />
          
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;