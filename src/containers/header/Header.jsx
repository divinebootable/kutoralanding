import React from "react";
import people from "../../assets/people.png";
import "./header.css";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="kutora__header section__padding" id="home">
      <div className="kutora__header-content">
        <h1 className="gradient__text">
          Kutora, where innovation meets advocacy.
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="kutora__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="kutora__header-content__people">
          {/* <img src={people} alt="people" /> */}
          <p className="gradient__text">AI POWERED</p>
        </div>
      </div>

      <div className="kutora__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
