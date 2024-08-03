import React from 'react';

const HomePage = () => {
  return (
    <div className="black text-white">
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-lg">
              <img src="https://avatars.githubusercontent.com/u/70689435?s=200&v=4" alt="Robotics Club IT BHU Logo" className="w-32 h-32 mb-4" />
            </a>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Achievements</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white font-bold py-0.5 px-4 rounded"> <a href="https://robotics-club-iit-bhu.github.io/RoboReG/">Roboreg</a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="py-20 bg-black-500 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-white-400">ROBOTICS CLUB (IIT BHU)</h1>
          <h2 className="text-2xl font-bold mb-8 text-green-400">Robotics Handle It,</h2>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, a magni laboriosam nobis officiis ipsum aut nam quas? Ab maxime eligendi, earum ad assumenda illo tenetur natus! Culpa saepe excepturi omnis veniam ipsam rerum, nesciunt praesentium molestias dolorem qui commodi fugiat ab ex quia iusto facilis a rchitecto! Nihil sint provident voluptate, exercitationem excepturi aliquid praesentium repellat expedita. Deleniti voluptatum laboriosam facere rerum.
          </p>
          <div className="flex justify-end">
            <img src="iRobotics_Club_Website_24-25/frontend/src/image14.png" alt="Robot hand holding a sphere" className="px-3 py-4 w-160 h-80 mb-16 mt-4" style={{ transform: 'rotate(360deg)', marginRight: '-40px', marginTop: '-20px' }} />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <img src="https://img.freepik.com/premium-photo/girl-interacting-with-robot-artificial-intelligence_1051622-22.jpg" alt="Robot interacting with a girl" className="w-full h-auto rounded-lg mb-8 bg-gray-800 rounded-lg p-4 border-4 border-transparent hover:border-blue-500 hover:border-opacity-100 transition duration-500 ease-in-out" />
          <h2 className="text-3xl font-bold mt-8 mb-4">THE AI FUTURE IS HERE</h2>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-800 rounded-lg p-4 border-4 border-transparent hover:border-blue-500 hover:border-opacity-100 transition duration-500 ease-in-out">
              <img src="https://th.bing.com/th/id/OIP.yRzjlN-4GEPBpqumrW8BDwHaE8?rs=1&pid=ImgDetMain" alt="Robot hand interacting with a human hand" className="w-full h-full rounded-lg" />
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border-4 border-transparent hover:border-blue-500 hover:border-opacity-100 transition duration-500 ease-in-out">
              <img src="https://th.bing.com/th/id/OIP.FvQpkA2ak2Y1SvR3d5ZDPAHaJ4?w=1500&h=2000&rs=1&pid=ImgDetMain" alt="Placeholder image" className="w-full h-full rounded-lg" />
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border-4 border-transparent hover:border-blue-500 hover:border-opacity-100 transition duration-500 ease-in-out">
              <img src="https://www.wtin.com/media/kjvdcfzv/robotics-tn.jpg?anchor=center&mode=crop&rnd=133464216817630000" alt="Placeholder image" className="w-full h-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-8 mt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <ul>
              <li><img src="https://avatars.githubusercontent.com/u/70689435?s=200&v=4" id="img" className="w-24 h-24" alt="robotics club" /></li>
              <li><h2 className="text-white text-xl mb-4 font-semibold">About Us</h2></li>
              <li><p className="text-gray-400">Everything related to robotics club IIT BHU will be written here...</p></li>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/robotics.iitbhu/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.558 1.593-1.558h1.713V2.341c-.295-.039-1.309-.129-2.487-.129-2.463 0-4.144 1.507-4.144 4.280v2.422H8.242v3.209h2.234v8.196H13.397z"/></svg></a>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current text-white" viewBox="0 0 24 24">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                </svg></a>
                <a href="https://www.instagram.com/robotics_club.iitbhu/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="fill-current text-white" viewBox="0 0 24 24">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg></a>
                <a href="https://in.linkedin.com/company/robotics-club-iit-bhu-varanasi"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 24 24">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg></a>
                <a href="https://www.youtube.com/channel/UCJ74h9xdwA9oOHcMAZR-hyg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
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
              <li><p className="text-gray-400">123 Robotics Street,</p></li>
              <li><p className="text-gray-400">City, State, 12345</p></li>
              <li><p className="text-gray-400">Email: <a href="mailto:info@roboticsclub.com" className="text-blue-400">info@roboticsclub.com</a></p></li>
            </ul>
          </div>
          </div>
      </footer>

    </div>
  );
};

export default HomePage;
