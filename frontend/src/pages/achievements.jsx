import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Achievements = () => {
  const boxStyles = {
    box1: {
      top: '-5%',
      left: '-30%',
      width: '160%',
      height: '25%',
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
      height: '70%',
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
      height: '25%',
      borderImage: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152)) 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
    },
    box4: {
      top: '51.3%',
      left: '50%',
      width: '80%',
      height: '41.6%',
      borderImage: 'linear-gradient(180deg, #01FEB1, rgb(42, 42, 152)) 1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
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
                className="absolute bg-[#333] border-[3px] border-gradient-custom p-4"
                style={boxStyles.box1}
              >
                <h1 className="text-[#01FEB1] text-[3.5vw] font-bold  ">ROBOCON</h1>
                <p className="text-[#FFFAFA] text-[1.5vw]">
                IIT BHU has secured a special position in Robocon 2024, an esteemed international robotics competition. we completed the stage 1 and had special mentions in stage 2 under the mentorship of<span className="text-[#01FEB1] text-[3vw]"><a href="https://www.linkedin.com/in/dr-shyam-kamal-9b750b98?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABS4i9sBMILfhYZCiKBqucrc5dSMmV8DdiQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BBbD0ezl8SDmen2Lpl4MdGA%3D%3D"> dr. shyam kamal</a></span> with team leader<span className="text-[#01FEB1] text-[3vw]"><a href="https://www.linkedin.com/in/rickthosarkar"> Ricktho Sarkar</a></span> and members  Rohan Jena, Krishnendu Chowdhury, Shashwat G. Patil, Akshat Shrivastava, Dev Gupta, Uday Mathur, Masud Ali, Thomas J Chackenkulam, Diwakar Saini, Shivam kumar, Gaurav Singh, Sankalp Chandra

                </p>
              </div>
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom p-4"
                style={boxStyles.box2}
              >
                <h1 className="text-[#01FEB1] text-[3.5vw] font-bold">FLIPKART GRID 5.0</h1>
                <p className="text-[#FFFAFA] text-[1.5vw]">
                Our team qualified for the finalists in the esteemed robotics competition the FLIPKART GRID 2023.
                The problem statement was to  Develop AI-powered robots focused on intelligent inventory management, enabling smart decision-making, and integrating drone-based systems for faster, more efficient delivery solutions
                </p>
                <h2 className="text-[#01FEB1] text-[3.5vw] font-bold mt-4">FLIPKART GRID 4.0</h2>
                <p className="text-[#FFFAFA] text-[1.5vw]">
                Our team qualified for the finalists in the esteemed robotics competition the FLIPKART GRID  2023 as well. 
                here the ps was somewhat like to Design autonomous robots capable of efficiently automating warehouse tasks, such as product sorting and handling, as well as enhancing the delivery process with minimal human intervention.

                </p>
              </div>
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom p-4"
                style={boxStyles.box3}
              >
                <h2 className="text-[#01FEB1] text-[3.5vw] font-bold">FLIPKART GRID 3.0</h2>
                <p className="text-[#FFFAFA] text-[1.5vw]">
                Our team IIT BHU was in the top 50 in the FLIPKART GRID of year 2022, this year the PS  was to Autonomous robots for complex navigation and last-mile delivery
                </p>
              </div>
              <div
                className="absolute bg-[#333] border-[3px] border-gradient-custom p-4"
                style={boxStyles.box4}
              >
                <h2 className="text-[#01FEB1] text-[3.5vw] font-bold">FLIPKART GRID 2.0</h2>
                <p className="text-[#FFFAFA] text-[1.5vw]">
                Our team IIT BHU secured the second position in the FLIPKART GRID of the year 2021 , in which the problem statements was to Develop robots for automating tasks in e-commerce warehouses, focusing on efficient sorting, packing, and movement of goods within the facility.
                this was by far some of the honorable achievements by THE ROBOTICS CLUB IIT BHU
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
