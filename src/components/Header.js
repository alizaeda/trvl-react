import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="header-container">
      <video src="./videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="header-btns">
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Get Started
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            WATCH TRAILER <i className="far fa-play-circle"></i>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
