import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatkutora.css";

const WhatKutora = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Kutora"
          text="Kutora is a cloud-based legal practice management SAAS solution for law firms."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore Kutora</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Client Intake"
          text="Easily Attract and win new clients."
        />
        <Feature
          title="Kutora AI Assistant"
          text="Draft and Generate Documents faster"
        />
        <Feature
          title="Case Management"
          text="Access every Case detail from anywhere"
        />
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Document Management"
          text="Access every Document  from anywhere"
        />
        <Feature title="Billing" text="Send Bills and get paid" />
        <Feature
          title="Task and Calendar Management"
          text="Reminder to meet every deadline"
        />
      </div>
    </div>
  );
};

export default WhatKutora;
