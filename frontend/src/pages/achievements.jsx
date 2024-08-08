// import React from 'react';
import './achievements.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Achievements = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <div className="flex-1">
          <section>
            <div className="rob">
              <article>
                <p>
                  At <span id="span">robotics club,</span> we believe that every achievement is a testament to our commitment, innovation, and teamwork.
                </p>
              </article>
            </div>
          </section>

          <section>
            <div className="relative mx-20">
              <h1 className='text-7xl text-white flex justify-center font-bold my-20'>Our Achievements</h1>
              <div className="container">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
                <div className="box4"></div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Achievements;
