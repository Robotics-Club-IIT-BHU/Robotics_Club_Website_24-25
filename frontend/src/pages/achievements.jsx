import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Achievements = () => {
  // Inline styles for dynamic positioning and sizing of boxes
  const boxStyles = {
    box1: {
      top: '-5%',
      left: '-30%',
      width: '160%',
      height: '25%',
      borderImage: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152)) 1',
    },
    box2: {
      top: '23%',
      left: '-30%',
      width: '75%',
      height: '70%',
      borderImage: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152)) 1',
    },
    box3: {
      top: '23%',
      left: '50%',
      width: '80%',
      height: '25%',
      borderImage: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152)) 1',
    },
    box4: {
      top: '51.3%',
      left: '50%',
      width: '80%',
      height: '41.6%',
      borderImage: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152)) 1',
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center bg-[#131313] min-h-screen">
        <div className="relative w-[85vw] mt-[5vw] flex flex-col items-center flex-grow">
          <section className="flex flex-col items-center mb-[6vw]">
            <div className="text-[#FFFAFA] font-bold text-[3vw] leading-[4vw] tracking-wide border-l-[3px] border-gradient-custom pl-[2vw]" style={{ borderImageSource: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152))', borderImageSlice: 1 }}>
              <p>
                At <span className="text-[#01FEB1] uppercase">robotics club,</span> we believe that every achievement is a testament to our commitment, innovation, and teamwork.
              </p>
            </div>
          </section>

          <section className="relative flex flex-col items-center">
            <p className="text-[#FFFAFA] text-[5vw] font-bold uppercase tracking-wide mb-[6vw]">
              our achievements
            </p>
            <div className="relative w-full max-w-[85vw] h-[80vw]">
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom"
                style={boxStyles.box1}
              ></div>
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom"
                style={boxStyles.box2}
              ></div>
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom"
                style={boxStyles.box3}
              ></div>
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom"
                style={boxStyles.box4}
              ></div>
            </div>
          </section>
        </div>
        <Footer className="w-full mt-auto" />
      </main>
    </>
  );
};

export default Achievements;
