// import React from 'react'
import '../components/navbar.css'
const Navbar = () => {
  return (
    <>
      <header className="flex items-center p-2 justify-center">
        <a href="#" className="flex-shrink-0">
          <img
            src="src\assets\roboclub_logo-transparent.png"
            alt="Logo"
            className="rounded-3xl w-[200px] h-[200px]  mr-40"
          />
        </a>
        <nav className="flex items-center ">
        <ul className="flex items-center space-x-14 mx-20">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="/events" className="hover:text-blue-400">Events</a>
        <a href="/achievements" className="hover:text-blue-400">Achievements</a>
        <a href="/blogs" className="hover:text-blue-400">Blogs</a>
        <a href="/team" className="hover:text-blue-400">Team</a>
            <a
              href="https://www.bing.com/ck/a?!&&p=3ca73a38f98bd67eJmltdHM9MTcyMzY4MDAwMCZpZ3VpZD0yNDQ5NWE2Mi0zZjQ5LTZiZmUtMzAyOC00OWQ2M2UzZTZhMzEmaW5zaWQ9NTIxMA&ptn=3&ver=2&hsh=3&fclid=24495a62-3f49-6bfe-3028-49d63e3e6a31&psq=roboreg&u=a1aHR0cHM6Ly9yb2JvdGljcy1jbHViLWlpdC1iaHUuZ2l0aHViLmlvL1JvYm9SZUcv&ntb=1"
              className="inline-block px-8 py-3 z-10 inset-0 border-6 rounded-full border-transparent gradient-roboreg hover:text-blue-400  text-center"
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
