import { useState } from "react";
import Navbar from "../components/navbar";
import OtherNav from "../components/otherNavBar/OtherNav";
import '../assets/css/mobile.css';

const HomepageLayout = ({ render }) => {

  const [burger,setBurger] = useState(false);
  return (
    <div>
      <Navbar setBurger = {setBurger} />
      {render()}

      <OtherNav isBurger = {burger} setBurger = {setBurger} />
    </div>
  );
};

export default HomepageLayout;
