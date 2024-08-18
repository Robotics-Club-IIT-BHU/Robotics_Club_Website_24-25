import React from 'react'
import ReactDOM from 'react-dom/client'
import './Team.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { FaInstagramSquare } from "react-icons/fa";
function Team(){
    return (<>
    <Navbar/>
        
        <br />

        <p className='sub new'>Meet Our Flagbearers</p>
        <br />
        <p className='item'>Secretaries</p>
        <div className='members'>
            <div>
              <img className='member' src="./src/assets/sd.jpg" alt="" />    
              <p>Sammit Dhar</p>
              <div className='social'>
                  
              <a href="https://www.instagram.com/sammit.dhar?igsh=cDFyNjg2Mzl0bHlj"><img src="./src/assets/ig.png" alt="" height={"40px"} width={"40px"} /></a>
              <a href="https://www.linkedin.com/in/sammit-dhar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src="./src/assets/linkedin.png" alt="" height={"35px"} width={"35px"} /></a>
              
              <a href="https://github.com/sdhar04"><img src="./src/assets/git.jpg" alt="" height={"33px"} width={"33px"} /></a>
              </div>            
            </div>
            <div>
              <img className='member' src="./src/assets/rj1.jpg" alt="" />    
              <p>Rohan Jena</p>
              <div className='social'>
                 
              <a href="https://www.instagram.com/rohanjena50?igsh=MTR5aWl0NXR4eGJ2dg=="><img src="./src/assets/ig.png" alt="" height={"40px"} width={"40px"} /></a>
              <a href="https://www.linkedin.com/in/rohan-jena-a69b23262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="./src/assets/linkedin.png" alt="" height={"35px"} width={"35px"} /></a>
              
              <a href="https://github.com/RohanJena"><img src="./src/assets/git.jpg" alt="" height={"33px"} width={"33px"} /></a>
              </div>            
            </div>
            <div>
              <img className='member' src="./src/assets/kc.jpg" alt="" />    
              <p>Krishnendu Chowdhury</p>   
              <div className='social'>
                
              <a href="https://www.instagram.com/krishnendu8904"><img src="./src/assets/ig.png" alt="" height={"40px"} width={"40px"} /></a>
              <a href="https://www.linkedin.com/in/krishnendu-chowdhury-405938257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src="./src/assets/linkedin.png" alt="" height={"38px"} width={"38px"} /></a>
              
              <a href="https://github.com/Krishnendu8904"><img src="./src/assets/git.jpg" alt="" height={"33px"} width={"33px"} /></a>
              </div>                         
            </div>                                  
        </div>
        <br />
        <br />
        <p className='item'>Tech Leads</p>
        <div className='members'>
            <div>
              <img className='member' src="./src/assets/sp.jpg" alt="" />    
              <p>Shashwat Patil</p>
              <div className='social sp'>
                  
              
              <a href="https://www.linkedin.com/in/shashwatgpatil/"><img src="./src/assets/linkedin.png" alt="" height={"38px"} width={"38px"} /></a>
              
              <a href="https://github.com/ShashwatPatil"><img src="./src/assets/git.jpg" alt="" height={"33px"} width={"33px"} /></a>
              </div>            
            </div>
            <div>
              <img className='member' src="./src/assets/rs1.jpg" alt="" />   
              <p>Ricktho Sarkar</p>
              <div className='social'>
                  
              <a href="https://www.instagram.com/ricktho_sarkar__?utm_source=qr&igsh=MWlkMmVhM2l2Nmx1ag=="><img src="./src/assets/ig.png" alt="" height={"40px"} width={"40px"} /></a>
              <a href="https://www.linkedin.com/in/rickthosarkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="./src/assets/linkedin.png" alt="" height={"38px"} width={"38px"} /></a>
              
              <a href="https://github.com/Ricktho1"><img src="./src/assets/git.jpg" alt="" height={"33px"} width={"33px"} /></a>
              </div>                             
            </div>
            <div>
              <img className='member' src="./src/assets/as.jpg" alt="" />    
              <p>Akshat Shrivastava</p>   
              <div className='social'>
                 
              <a href="https://www.instagram.com/akshatshrivastava1104?igsh=MTZoeTd0dGhiNzNyNw=="><img src="./src/assets/ig.png" alt="" height={"40px"} width={"40px"} /></a>
              <a href="https://www.linkedin.com/in/akshat-shrivastava-74ba2724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="./src/assets/linkedin.png" alt="" height={"38px"} width={"38px"} /></a>
              
              <a href="https://github.com/codemaster1104"><img src="./src/assets/git.jpg" alt="" height={"33px"} width={"33px"} /></a>
              </div>                         
            </div>   
                               
        </div>
        <br />
        <br />
        <p className='item'>Core Team:</p>
        <div className='members core'>
          <div className='coreMember'>
            <p>Kumar Utkarsh</p>
            <a href="https://www.linkedin.com/in/kumar-utkarsh-446251218/">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Dushyant Agrawal</p>
            <a href="https://www.linkedin.com/in/dushyant-agrawal-3a3086265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
          </div>
        </div>
        <div className='members core'>
          <div className='coreMember'>
            <p>Bhuvnesh Aggarwal</p>
            <a href="https://www.linkedin.com/in/bhuvnesh-aggarwal/">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Nikita Gupta</p>
            <a href="https://www.linkedin.com/in/nikitaguptaaa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
          </div>
        </div>
        <div className='members core'>
          <div className='coreMember'>
            <p>Shashank Shekhar Singh</p>
            <a href="https://www.linkedin.com/in/shashank-shekhar-singh-121128254">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Chaitanya Gambali</p>
            <a href="https://www.linkedin.com/in/gs-chaitanya">LinkedIn</a>
          </div>
        </div>
        <div className='members core'>
          <div className='coreMember'>
            <p>Abhishek Shukla</p>
            <a href="https://www.linkedin.com/in/abhishek-shukla-350713255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Harshita Rajput</p>
            <a href="https://www.linkedin.com/in/harshita-rajput-01b90b281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
          </div>
        </div>
        <div className='members core'>
          <div className='coreMember'>
            <p>Rachit Goyal</p>
            <a href="https://www.linkedin.com/in/rachit-goyal-702025217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Shreya Jain</p>
            <a href="https://www.linkedin.com/in/shreya-jain-970b2326a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
          </div>
        </div>
        <div className='members core'>
          <div className='coreMember'>
            <p>Uday Mathur</p>
            <a href="https://www.linkedin.com/in/uday-mathur-367b982a4/">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Dev Gupta</p>
            <a href="https://www.linkedin.com/in/dev-gupta-7b5190271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
          </div>
        </div>
        <div className='members core'>
          <div className='coreMember'>
            <p>Aryan Yadav</p>
            <a href="https://www.linkedin.com/in/aryan3101">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Ayush Kumar</p>
            <a href="https://www.linkedin.com/in/ayush-kumar-aa5604254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
          </div>
        </div>
        <div className='members core'>
          <div className='coreMember'>
            <p>Ashish Singh</p>
            <a href="https://www.linkedin.com/in/ashish-singh-bb8020250/">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Aryansh Kumar</p>
            <a href="https://www.linkedin.com/in/aryansh-kumar-5b733825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
          </div>
        </div>
        
        <br />
        <br />
        <p className='item'>Team Leads</p>
        <div className='members core'>
          <div className='coreMember'>
            <p>Shreya Sinha</p>  
            <p id='post'>(Project Head)</p>     
            <a href="https://www.linkedin.com/in/shreya-sinha-22217b256/">LinkedIn</a>            
          </div>
          
        </div>
        <div className='members core'>
          <div className='coreMember'>
            <p>Ricktho Sarkar</p>
            <p id='post'>(Design Head)</p>
            <a href="https://www.linkedin.com/in/rickthosarkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Nandini Arora</p>
            <p id='post'>(Design Head)</p>
            <a href="https://www.linkedin.com/in/arora-nandini/">LinkedIn</a>
          </div>
        </div>
        <br />
        <br />
        <p className='item'>Contributors</p>
        <div className='members core'>
          <div className='coreMember'>
            <p>Abhinandan Chandra</p>
            <a href="https://www.linkedin.com/in/abhinandan-chandra-2687632a7/">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Meenal Soni</p>
            <a href="https://www.linkedin.com/in/meenal-soni-7bb74a285/">LinkedIn</a>
          </div>
        </div>
        <div className='members core'>
          <div className='coreMember'>
            <p>Aabha</p>
            <a href="https://www.linkedin.com/in/aabha-rajput-3a9988289/">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Abhilasha Supriya</p>
            <a href="https://www.linkedin.com/in/abhilasha-supriya-76922727a/">LinkedIn</a>
          </div>
        </div>
        <div className='members core'>
          <div className='coreMember'>
            <p>Mohit Sharma</p>
            <a href="https://www.linkedin.com/in/mohit-sharma-949a15287/">LinkedIn</a>
          </div>
          <div className='coreMember'>
            <p>Manvi Jangid</p>
            <a href="https://www.linkedin.com/in/manvijangid/">LinkedIn</a>
          </div>
        </div>
        <br />
        <br />

        <Footer/>
    </>);
}

export default Team;

