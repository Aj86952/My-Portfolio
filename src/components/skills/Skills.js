import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="container border border-dark border-2 mt-3">
      <div className="skill-main container mt-4">
        <h3 className="logo">Web Tools :-</h3>
        <ul className="web">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
        </ul>
        <h3 className="logo">Technologies :-</h3>
        <ul className="tech">
          <li>ReactJS</li>
          <li>NoteJS</li>
          <li>ExpressJS</li>
          <li>MongoDB</li>
        </ul>
        <h3 className="logo">Knowledge Of :-</h3>
        <ul className="known">
          <li>Github</li>
          <li>Postman</li>
          <li>AWS</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
