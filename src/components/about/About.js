import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container border border-dark border-2 mt-3">
      <div className="about-main">
        <h2 className="about-head">
          <i>Full Stack Web Developer :-</i>
        </h2>

        <p className="about-para">
          "I am a aspiring <b>Full Stack Web Developer</b> with strong eye for
          innovative designs and a keen understanding of techniques. I enjoy
          <mark style={{ background: "yellowgreen" }}>
            building everything from scratch
          </mark>{" "}
          and opting for complex problems and truning them into simple and
          beauriful designs. I also love the logic and sturcture of coding and
          always try to write clean, elegant and most effective code."
        </p>
      </div>
    </div>
  );
}

export default About;
