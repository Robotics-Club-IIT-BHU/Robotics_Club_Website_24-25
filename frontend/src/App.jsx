// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Blogs from './pages/blogs';
import BlogPage from './pages/blogspage';
import Achievements from './pages/achievements';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogpage" element={<BlogPage/>}/>
        {/* <Route path="/events" element={<Events />} />*/}
        <Route path="/achievements" element={<Achievements/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
