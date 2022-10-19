import React from "react";
import AllPageContact from "./AllPageContact";

function StartUpIdeas() {
  return (
    <div className="other-container">
      <div className="big-container">
        <h1 className="text-center h1-height h1-small d-mobile">
          Start UP Ideas
        </h1>
        <p className=" text-center p-height extra-padding-container color-brown">
          The term startup refers to a company in the first stages of
          operations. Startups are founded by one or more entrepreneurs who want
          to develop a product or service for which they believe there is
          demand.
        </p>
      </div>

      <div className="small-container start-up-bg">
        {/* <motion.h2 viewport = {{once : true}} initial = {{opacity : 0,x : -100}} whileInView = {{opacity : 1,x :0}} transition = {{type : "easeIn", duration : 1, delay : 0.15}}  className="color-gold h1-height">WHO CAN PARTICIPATE ?</motion.h2> */}
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

export default StartUpIdeas;
