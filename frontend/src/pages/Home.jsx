import React from 'react'
import Navbar from '../components/Navbar'
import Background from '../components/Background';

const Home = () => {
  return (
    <>
      <main className=" text-white relative min-h-screen">
        <Background/>
        <Navbar />
      </main>
    </>
  );
}

export default Home
