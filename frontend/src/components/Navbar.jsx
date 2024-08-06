import React from 'react'
import '../components/navbar.css'
const Navbar = () => {
  return (
    <>
     <header className="flex items-center p-4">
                <a href="#" className="flex-shrink-0">
                    <img src="https://avatars.githubusercontent.com/u/70689435?s=200&v=4" alt="Logo" className="h-20" />
                </a>
                <nav className="flex-grow flex justify-around ml-4">
                    <a href="/" className="hover:bg-gray-700 text-white p-2">Home</a>
                    <a href="/home" className="hover:bg-gray-700  text-white p-2">Events</a>
                    <a href="/achievements" className="hover:bg-gray-700  text-white p-2">Achievements</a>
                    <a href="/blogs" className="hover:bg-gray-700  text-white p-2">Blogs</a>
                    <a href="/about" className="hover:bg-gray-700  text-white p-2">About Us</a>
                    <div href="#" className="gradient-border">
                    <a href="#">Roboreg</a>
                    </div>
                </nav>
            </header>
    </>
  )
}

export default Navbar