import React from 'react';
import './App.css';

const App = () => {
  return (
    <main>
      <div className="main">
        <header>
          <nav>
            <li>
              <img 
                src="https://avatars.githubusercontent.com/u/70689435?s=280&v=4"
                id="img"
                alt="robotics club"
              />
            </li>
            <li>home</li>
            <li>events</li>
            <li>achievements</li>
            <li>blog</li>
            <li>about us</li>
            <div className="r">roboreg</div>
          </nav>
        </header>

        <section>
          <div className="rob">
            <article>
              <p>
                At <span id="span">robotics club,</span> we believe that every achievement is a testament to our commitment, innovation and teamwork
              </p>
            </article>
          </div>
        </section>

        <section>
          <div className="main2">
            <p id="p">our achievements</p>
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="box4"></div>
          </div>
        </section>
      </div>

      <section>
        <div className="main3">
          <img 
            src="https://avatars.githubusercontent.com/u/70689435?s=280&v=4" 
            alt=""
          />
          <div className="contact">
            <h1 id="h1">About Us</h1>
            <p id="pu">Everything related to robotics club ITT BHU will be written here more specifically about ITT BHU</p>
          </div>
          <div className="usefullinks">
            <ul>
              <h1 id="h1">Useful Links</h1>
              <li className="li">home</li>
              <li className="li">events</li>
              <li className="li">achievements</li>
              <li className="li">blogs</li>
              <li className="li">about us</li>
            </ul>
          </div>
          <div className="usefullinks1">
            <ul>
              <h1 id="h1">Useful Links</h1>
              <li className="li2">home</li>
              <li className="li2">events</li>
              <li className="li2">achievements</li>
              <li className="li2">blogs</li>
              <li className="li2">about us</li>
            </ul>
          </div>
          <div className="contactus">
            <ul>
              <h1 id="h1">Contact Us</h1>
              <li className="li3">email@roboticsclub.com</li>
              <li className="li3">+91 876543210</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;

