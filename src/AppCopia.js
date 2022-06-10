import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route path="/" name='home' element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;