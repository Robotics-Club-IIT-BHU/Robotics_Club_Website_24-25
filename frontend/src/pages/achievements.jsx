import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Achievements = () => {
  const boxStyles = {
    box1: {
      top: '-3%',
      left: '-30%',
      width: '160%',
      height: '23%',
      borderImage: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152)) 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
    },
    box2: {
      top: '23%',
      left: '-30%',
      width: '75%',
      height: '41%',
      borderImage: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152)) 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
    },
    box3: {
      top: '23%',
      left: '50%',
      width: '80%',
      height: '32%',
      borderImage: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152)) 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
    },
    box4: {
      top: '57%',
      left: '50%',
      width: '80%',
      height: '41.6%',
      borderImage: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152)) 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
    },
    box5: {
      top: '66%',
      left: '-30%',
      width: '75%',
      height: '32.5%',
      borderImage: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152)) 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
    }
  };

  // Replace these URLs with the actual URLs of the logos
  const robocon = 'https://github.com/mitaliiiiii/picture_for_robo/blob/main/robocon.png?raw=true';
  const flipkartLogo2 = 'https://raw.githubusercontent.com/mitaliiiiii/picture_for_robo/main/flipkart-grid-01.webp'; 
  const flipkartLogo3 = 'https://raw.githubusercontent.com/mitaliiiiii/picture_for_robo/main/grid3.webp'; 
  const flipkartLogo4 = 'https://raw.githubusercontent.com/mitaliiiiii/picture_for_robo/main/grid%204.webp'; 
  const flipkartLogo5 = 'https://github.com/mitaliiiiii/picture_for_robo/blob/main/grid%205.png?raw=true'; 

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
            <div className="relative w-full max-w-[85vw] h-[105vw]">
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom p-4"
                style={boxStyles.box1}
              ><img src={robocon} alt="robocon" className="w-[25%] h-auto" />
                <p className="text-[#FFFAFA] text-[1.5vw] alignitems- left">
                IIT BHU has secured a special position in Robocon 2024, an esteemed international robotics competition, The problem statement revolved around creating robots that can navigate complex environments, complete assigned tasks autonomously, and interact with objects or other robots in a dynamic and challenging scenario.  <br /> <span className="text-[#FFFAFA] font-bold text-[1.5vw]">Mentor </span> : Dr. shyam kamal <br /><span className="text-[#FFFAFA] font-bold text-[1.5vw]">  Team leader </span>: Ricktho sarkar<br /> <span className="text-[#FFFAFA] font-bold text-[1.5vw]">Team members</span>: Rohan Jena, Krishnendu Chowdhury, Shashwat G. Patil, Akshat Shrivastava, Dev Gupta, Uday Mathur, Masud Ali, Thomas J Chackenkulam, Diwakar Saini, Shivam kumar, Gaurav Singh, Sankalp Chandra 

                </p>
              </div>
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom p-4"
                style={boxStyles.box2}
              >
                <img src={flipkartLogo5} alt="Flipkart Grid 5.0" className="w-[100%] h-auto" />
                <p className="text-[#FFFAFA] text-[1.5vw]">
                Our team qualified for the finalists in the esteemed robotics competition the FLIPKART GRID 2023. a robotics and AI-focused competition where teams are challenged to develop innovative robotic solutions for intelligent inventory management and efficient delivery systems. The competition emphasizes the creation of AI-powered robots that can make smart decisions, integrate with drone-based systems, and optimize various aspects of e-commerce operations. It's a platform for showcasing advanced robotics and AI capabilities in real-world applications.
                </p>
              </div>
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom p-4"
                style={boxStyles.box3}
              >
                <img src={flipkartLogo4} alt="Flipkart Grid 4.0" className="w-[100%] h-auto" />
                <p className="text-[#FFFAFA] text-[1.5vw]">
               
                Our team qualified for the finalists in the esteemed robotics competition the FLIPKART GRID 2022 as well. 
                The competition aims to test contestants' ability to create a quadcopter that can hover stably, use image processing to detect and pick up an object with an electromagnet, and then navigate to a bin to drop the object based on image processing.The competition tested participants' abilities in robotics, computer vision, and autonomous systems.
                </p>
              </div>
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom p-4"
                style={boxStyles.box4}
              >
                <img src={flipkartLogo2} alt="Flipkart Grid 2.0" className="w-[100%] h-auto" />
                <p className="text-[#FFFAFA] text-[1.5vw]">
                
                Our team IIT BHU secured the second position in the FLIPKART GRID of the year 2020 ,Flipkart Grid 2.0 is a robotics competition that challenges teams to develop advanced robotic solutions for automating tasks in e-commerce warehouses.  in which The problem statement for Flipkart Grid 2.0 focused on developing robotic solutions to automate key tasks in e-commerce warehouses, including efficient product sorting, packing, and the precise movement of goods. The objective was to create innovative systems that streamline warehouse operations, reduce human intervention, and enhance overall efficiency and accuracy
                
                </p>
              </div>
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom p-4"
                style={boxStyles.box5}
              >
                <img src={flipkartLogo3} alt="Flipkart Grid 3.0" className="w-[100%] h-auto" />
                <p className="text-[#FFFAFA] text-[1.5vw]">
                Our team IIT BHU was in the top 50 in the FLIPKART GRID of year 2022, Flipkart Grid 3.0,This competition focuses on optimizing e-commerce automation systems. Participants must design and build robots that fit within a 6x6 inch square, equipped with a tray to carry and drop a 20x20x20 mm cube. teams compete in a relay race where each robot must autonomously transport and drop a package while adhering to specific start and end conditions.
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer className="w-full mt-auto" />
      </main>
    </>
  );
};

export default Achievements;