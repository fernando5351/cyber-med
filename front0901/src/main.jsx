import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.render(
    <HelmetProvider>
        <App />
    </HelmetProvider>, document.getElementById('root'))
