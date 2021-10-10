import React from "react";
import "./Home.css";
import logo from "../image/ajinkya1.jpg";

function Home() {
  return (
    <div className="home-main">
      <img
        src={logo}
        alt="logo"
        className="my-img image-fluid"
        height="150px"
        width="150px"
      />

      <div className="home-div">
        <h1 className="hello">Hello, I'm</h1>
        <h1 className="my-name">Ajinkya Hatwar</h1>
        <h1 className="web-developer">Full Stack Web Developer </h1>
      </div>
    </div>
  );
}

export default Home;
