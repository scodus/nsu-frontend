import React from "react";
import AllPageContact from "./AllPageContact";

function RoboWars() {
  return (
    <div className="other-container">
      <div className="big-container">
        <h1 className="h1-height d-mobile">ROBOWAR</h1>
        <p className="p-height extra-padding-right-container font-size-20 color-brown">
          War waged by intelligent machines conducted by humans ensconced in
          bunkers or roaming from stand-off command centers at sea or in air can
          alter the face of the battlefield.
        </p>
      </div>

      <div className="small-container robo-wars-bg">
        <h2 className="color-gold h1-height">WHO CAN PARTICIPATE ?</h2>
        <ul className="ul-color-white">
          <li>Why consistent writing makes you a better designer</li>
          <li>5 soft skills every product designer should master</li>
          <li>The UX Writing Starter-Kit</li>
        </ul>
      </div>

      <AllPageContact />
    </div>
  );
}

export default RoboWars;
