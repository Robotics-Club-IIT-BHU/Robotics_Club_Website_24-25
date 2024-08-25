import React from "react";
import "./EventCard.css";

const EventCard = () => {
  return (
    <div className="event-cards-wrapper">
      {" "}
      {/* Wrapper for multiple cards */}
      <div className="event-container">
        <div className="desktop-card">
          <div className="pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfHwBL0cSClH0QCh_k3cscBNO6j9eG6j5sA&s"
              className="event-image"
            />
          </div>
          <h2 className="large-head">Technex</h2>
          <div className="vertical">Date : </div>
          <button>
            <i className="fa fa-arrow-right"></i>
          </button>
          <div className="detail">
            Technex is the annual techno-management fest of IIT BHU, offering a
            platform for students to showcase their technical skills through
            competitions, workshops, and guest lectures. It's one of India's
            oldest and most prestigious technical festivals, attracting
            participants nationwide.
          </div>
        </div>
      </div>
      <div className="event-container">
        <div className="desktop-card">
          <div className="pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZexBgq329U3onkFWsckZKG0DzSWukcUqRLg&s"
              alt="MAXEX"
              className="event-image"
            />
          </div>
          <h2 className="large-head">Mazex</h2>
          <div className="vertical">Date : </div>
          <button>
            <i className="fa fa-arrow-right"></i>
          </button>
          <div className="detail">
            Mazex is a robotics competition where participants design and build
            autonomous robots to navigate through a maze. The objective is to
            create a robot that can find the most efficient path from the start
            to the finish line, avoiding obstacles and solving the maze in the
            shortest possible time.
          </div>
        </div>
      </div>
      <div className="event-container">
        <div className="desktop-card">
          <div className="pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYA4gZ53rZHEgy0Ox5PGxf4xxkBeIOTAKqHQ&s"
              className="event-image"
            />
          </div>
          <h2 className="large-head" font-size="10%">
            ROS installation Fest{" "}
          </h2>
          <div className="vertical">Date : </div>
          <button>
            <i className="fa fa-arrow-right"></i>
          </button>
          <div className="detail">
            The ROS (Robot Operating System) Installation Fest is an event
            dedicated to helping students and club members get started with ROS,
            a flexible framework for writing robot software. The fest typically
            involves hands-on sessions where participants install and set up ROS
            on their systems.
          </div>
        </div>
      </div>
      <div className="event-container">
        <div className="desktop-card">
          <div className="pic">
            <img
              src="https://github.com/Robotics-Club-IIT-BHU/LaRoboLiga_PS2Arena/raw/main/arena_overview.jpg"
              className="event-image"
            />
          </div>
          <h2 className="large-head">La RoboLiga</h2>
          <div className="vertical">Date : </div>
          <button>
            <i className="fa fa-arrow-right"></i>
          </button>
          <div className="detail">
            La Roboliga is a league-based robotics competition where teams
            compete in various robotics challenges over a series of events. It
            may include tasks like robot soccer, obstacle courses, or other
            robotic sports, focusing on teamwork, innovation, and engineering
            skills.
          </div>
        </div>
      </div>
      <div className="event-container">
        <div className="desktop-card">
          <div className="pic">
            <img
              src="data:image/jpeg;base64,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"
              className="event-image"
            />
          </div>
          <h2 className="large-head">Summer Camp</h2>
          <div className="vertical">Date : </div>
          <button>
            <i className="fa fa-arrow-right"></i>
          </button>
          <div className="detail">
            The Summer Camp is an intensive training program organized during
            the summer break, focusing on building foundational skills in
            robotics. It typically includes workshops, lectures, and hands-on
            projects, allowing participants to delve deep into various aspects
            of robotics.
          </div>
        </div>
      </div>
      <div className="event-container">
        <div className="desktop-card">
          <div className="pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAcJTDm0hudzHdbqSTiiwqbESCxHhm32-Dw&s"
              className="event-image"
            />
          </div>
          <h2 className="large-head">Winter Camp</h2>
          <div className="vertical">Date : </div>
          <button>
            <i className="fa fa-arrow-right"></i>
          </button>
          <div className="detail">
            The Winter Camp is similar to the Summer Camp but is organized
            during the winter break. It usually focuses on more advanced topics
            in robotics, building on the skills learned during the Summer Camp
            or previous experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
