import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo gpt3__footer-links_div">
        <h4 className="text">Kutora</h4>
        <p>
          Yaounde, Cameroon <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>LinkedIn</p>
        <p>Twitter</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>(+237) 671640069</p>
        <p>info@kutoracrm.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 Kutoracrm. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
