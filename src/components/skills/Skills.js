import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skill-main container mt-4">
      <h3 className="logo">Web Tools :-</h3>
      <ul className="web">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
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
        <li>Bootstrap</li>
        <li>Postman</li>
        <li>Github</li>
      </ul>
    </div>
  );
}

export default Skills;
