import React from 'react';
import "./blogs.css"
import Navbar from '../components/Navbar';
const Blogs = () => {
  return (
    <>
    <Navbar/>
    <div className="text-white">
     
      <h1 className="text-center text-[#eee] font-bold text-3xl mt-8">LATEST BLOGS</h1>

      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden md:flex transform transition-transform duration-300 ease-in hover:shadow-xl hover:scale-105">
          <div className="md:w-1/3">
            <img src="https://tse4.mm.bing.net/th?id=OIP.NRVlzSn4MoKW2rnvb6gI9gAAAA&pid=Api&P=0&h=180" className="w-64 h-64 rounded-2xl object-cover mx-3 my-5" alt="Blog Image" />
          </div>
          <div className="md:w-2/3 p-4">
            <a className="text-white float-right text-lg" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
            </a>
            <p className="text-green-500 text-lg">Robotics</p>
            <div className="flex justify-between items-center mb-4">
              <div className="text-gray-500">By Writer Name</div>
              <div className="text-white">23 Dec.</div>
            </div>
            <div className="clear-both mt-4">
              <p className="text-gray-300 text-md">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ad quo quia earum amet ipsum illum reiciendis temporibus, dicta sequi sunt, iusto cupiditate. Officiis animi recusandae numquam minima dolor iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam animi a in veniam quis explicabo autem aliquam perferendis error assumenda qui, beatae velit, voluptates reiciendis earum blanditiis non laudantium eius."
              </p>
              <a href="#" className="text-blue-400 float-end"> See full</a>
            </div>
          </div>
        </div>
      </div>
     
      <h1 className="text-center text-[#eee] font-bold text-3xl mt-8">Related Blogs</h1>

      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 ease-in hover:shadow-xl hover:scale-105">
            <img src="https://tse4.mm.bing.net/th?id=OIP.NRVlzSn4MoKW2rnvb6gI9gAAAA&pid=Api&P=0&h=180" className="w-full h-48 object-cover" alt="Blog Image" />
            <div className="p-4">
              <p className="text-green-500 text-lg">Robotics</p>
              <div className="flex justify-between items-center mb-4">
                <div className="text-gray-500">By Writer Name</div>
                <div className="text-white">23 Dec.</div>
              </div>
              <div className="clear-both mt-4">
                <p className="text-gray-300 text-md">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ad quo quia earum amet ipsum illum reiciendis temporibus, dicta sequi sunt, iusto cupiditate. Officiis animi recusandae numquam minima dolor iure."
                  <a href="#" className="text-blue-400"> See full</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation" className="mt-8 flex justify-center">
        <ul className="pagination flex list-none">
          <li className="page-item disabled">
            <a className="page-link bg-gray-700 text-gray-400 border border-gray-600 px-4 py-2 rounded-lg" href="#">Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link bg-gray-700 text-gray-300 border border-gray-600 px-4 py-2 rounded-lg" href="#">1</a>
          </li>
          <li className="page-item active">
            <a className="page-link bg-indigo-600 text-white border border-gray-600 px-4 py-2 rounded-lg" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link bg-gray-700 text-gray-300 border border-gray-600 px-4 py-2 rounded-lg" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link bg-gray-700 text-gray-300 border border-gray-600 px-4 py-2 rounded-lg" href="#">Next</a>
          </li>
        </ul>
      </nav>

      {/* <footer className="bg-gray-800 py-8 mt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <ul>
              <li><img src="https://avatars.githubusercontent.com/u/70689435?s=200&v=4" id="img" className="w-24 h-24" alt="robotics club" /></li>
              <li><h2 className="text-white text-xl mb-4 font-semibold">About Us</h2></li>
              <li><p className="text-gray-400">Everything related to robotics club IIT BHU will be written here...</p></li>
              <div className="flex space-x-4 mt-4">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.558 1.593-1.558h1.713V2.341c-.295-.039-1.309-.129-2.487-.129-2.463 0-4.144 1.507-4.144 4.280v2.422H8.242v3.209h2.234v8.196H13.397z"/></svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current text-white" viewBox="0 0 24 24">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                </svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="fill-current text-white" viewBox="0 0 24 24">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 24 24">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                </svg></a>
              </div>
            </ul>
          </div>
          <div>
            <ul>
              <li><h2 className="text-white text-xl mb-4 font-semibold">Links</h2></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Achievements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">About us</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><h2 className="text-white text-xl mb-4 font-semibold">Join us</h2></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Career</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Internships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Collaborations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Donate</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><h2 className="text-white text-xl mb-4 font-semibold">Contact Us</h2></li>
              <li><p className="text-gray-400">IIT (BHU) ,Varanasi,</p></li>
              <li><p className="text-gray-400">221005,India</p></li>
              <li><p className="text-gray-400">gmail: <a href="mailto:info@roboticsclub.com" className="text-blue-400">info@roboticsclub.com</a></p></li>
            </ul>
          </div>
        </div>
      </footer> */}
    </div>
    </>
  );
};

export default Blogs;
