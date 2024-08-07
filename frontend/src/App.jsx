import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/homepage";
import About from './pages/About';
import Blogs from './pages/blogs';
import BlogPage from './pages/blogspage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogpage" element={<BlogPage/>}/>
        {/* <Route path="/events" element={<Events />} />
        <Route path="/achievements" element={<Achievements/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
