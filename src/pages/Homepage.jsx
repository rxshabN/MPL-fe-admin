import { React, useState } from "react";
import Navbar from "../components/Navbar";
import PuzzleImage from "../assets/heroPageElement.svg";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div id="Container" className="flex column">
      <Navbar />
      <div
        id="bodyContainer"
        className="flex row space-between align_items_center"
      >
        <div id="heroTextSection" className="flex column">
          <p className="heroHeadText">Hi there!</p>
          <p className="heroHeadText1">Welcome to MPL</p>
          <p className="heroSubText">
            Kick off your journey in the Math Premier League, where mathematics
            meets thrilling challenges! Gear up for exciting rounds like the
            Coding Relay, Treasure Hunt, and Jeopardy-style games, designed to
            test your skills and teamwork.
          </p>
          <div id="btnHolder" className="flex row align_items_center">
            <Link to="/teams">
              <button className="btn roundBtn purpleShade">Get Started</button>
            </Link>
            <Link to="/teams">
            <button className="btn roundBtn purpleShade" onClick={() => console.log('Button clicked')}>
  Create Team
</button> </Link>
          </div>
        </div>
        <div id="heroImageSection" className="flex column centerVH">
          <img id="puzzleImage" src={PuzzleImage} />
        </div>
      </div>
    </div>
  );
}
