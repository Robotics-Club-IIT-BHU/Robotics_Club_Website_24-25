// import React from 'react'
import '../components/navbar.css'
const Navbar = () => {
  return (
    <>
      <header className="flex items-center p-4 justify-center">
        <a href="#" className="flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/70689435?s=200&v=4"
            alt="Logo"
            className="h-20"
          />
        </a>
        <nav className="flex items-center ">
          <ul className="flex items-center space-x-14 mx-20">
            <a href="/">Home</a>
            <a href="/home">Events</a>
            <a href="/achievements">Achievements</a>
            <a href="/blogs">Blogs</a>
            <a href="/about">About Us</a>
            <a
              href="#"
              className=" px-8 py-2 z-10 inset-0 border-2 border-transparent gradient-roboreg"
            >
              Roboreg
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
