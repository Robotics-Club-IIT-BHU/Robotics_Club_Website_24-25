import React from 'react';
import './achievements.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Achievements = () => {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <div className="main">
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
            <div className="main2">
              <p id="p">our achievements</p>
              <div className="boxes-container">
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