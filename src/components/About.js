import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Whats up guysssss hows it goinggggg thanks for reading.
      This is Liz here. Yep I'm a dang web developer. I love my NYC tech life!
      Rainbows, cats, PIZZAAAA!!!
    </p>
    <img src={image} alt="I made this" />
  </div>;
}

export default About;
