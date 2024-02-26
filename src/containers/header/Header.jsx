import React from "react";
//import people from "../../assets/people.png";
import "./header.css";
//import ai from "../../assets/ai.png";
import intro from "../../assets/intro.png";

const Header = () => {
  return (
    <div className="kutora__header section__padding" id="home">
      <div className="kutora__header-content">
        <h1 className="gradient__text">
          Kutora, where innovation meets advocacy.
        </h1>
        <p>
          Best case management software that meets the needs of your firm—and
          your clients
        </p>

        <div className="kutora__header-content__input">
          {/* <input type="email" placeholder="Your Email Address" /> */}
          <button type="button">Get Started</button>
        </div>

        <div className="kutora__header-content__people">
          {/* <img src={people} alt="people" /> */}
          <p className="gradient__text">
            <span style={{ fontSize: "15px" }}>AI POWERED</span>
          </p>
        </div>
      </div>

      <div className="kutora__header-image">
        <img src={intro} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
