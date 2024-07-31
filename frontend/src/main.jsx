import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import About from './About.jsx'
import Blog from './blogs.jsx'
import BlogPage from './blogspage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Blog/>
  </React.StrictMode>,
)
