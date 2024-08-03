import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import About from './pages/About.jsx'
import HomePage from "./homepage.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <HomePage />
    </div>
  </React.StrictMode>,
)
