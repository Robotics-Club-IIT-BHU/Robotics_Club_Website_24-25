import React from 'react';
import Navbar from "../components/Navbar";
import Background from '../components/Background';
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div className="black text-white">
      <Navbar/>
      <Background/>

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
          <img src="https://img.freepik.com/premium-photo/girl-interacting-with-robot-artificial-intelligence_1051622-22.jpg" alt="Robot interacting with a girl" className="w-full h-auto  mb-8 bg-gray-800 rounded-lg p-4 border-4 border-transparent hover:border-blue-500 hover:border-opacity-100 transition duration-500 ease-in-out" />
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

     <Footer/>

    </div>
  );
};

export default HomePage;