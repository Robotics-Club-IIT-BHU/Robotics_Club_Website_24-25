import React from "react";
import "./App.css";
import MainEvents from "./components/MainEvents/MainEvents";
import EventCard from "./components/EventCard/EventCard";
import Slideshow from "./components/Slideshow/Slideshow";

function App() {
  return (
    <div className="App">
      <MainEvents />
      <EventCard />
      <Slideshow />
    </div>
  );
}

export default App;
