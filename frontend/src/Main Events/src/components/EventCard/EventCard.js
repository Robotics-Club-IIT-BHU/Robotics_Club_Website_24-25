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
              src="https://deeplor.s3.us-west-2.amazonaws.com/upload/2024/08/22/a36aadfbf4914d499d2d2a50ea83fa2f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240822T191123Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10800&X-Amz-Credential=AKIAROYXHKZUSZONTWIG%2F20240822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=a4cefc2316ecf7a129c7240b65bd194fcd159e8b46ab6868af6136411fee55cd"
              alt="RoboWars"
              className="event-image"
            />
          </div>
          <h2 className="large-head">RoboWars</h2>
          <div className="vertical">Date : </div>
          <button>
            <i className="fa fa-arrow-right"></i>
          </button>
          <div className="detail">
            Robowars is an intense and thrilling competition where participants
            build combat robots to fight against each other in an arena. The
            robots are equipped with weapons and armor, and the goal is to
            disable or destroy the opponent's robot.
          </div>
        </div>
      </div>
      <div className="event-container">
        <div className="desktop-card">
          <div className="pic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4gl_1Fm3lDzNe0zCBIQaMeN4bxmgwTa7p6QblK-1sKxEmxGVZfSTCKQ6VvqfdShpcdEI&usqp=CAU" />
          </div>
          <h2 className="large-head">Pixelate</h2>
          <div className="vertical">Date : </div>
          <button>
            <i className="fa fa-arrow-right"></i>
          </button>
          <div className="detail">
            Pixelate is a design and programming competition focused on computer
            vision and image processing. Participants work on challenges
            involving tasks like object detection, image segmentation, and
            pattern recognition using software tools and algorithms.
          </div>
        </div>
      </div>
      <div className="event-container">
        <div className="desktop-card">
          <div className="pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNWoYL0oAoOPm1o1vSFNwPX8iJ_QgltpCaw&s"
              className="event-image"
            />
          </div>
          <h2 className="large-head">MicroMouse</h2>
          <div className="vertical">Date : </div>
          <button>
            <i className="fa fa-arrow-right"></i>
          </button>
          <div className="detail">
            Micromouse is a classic robotics competition where small, autonomous
            robots are designed to navigate through a maze from start to finish.
            The robots must be capable of exploring the maze and then finding
            the shortest path in the quickest time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
