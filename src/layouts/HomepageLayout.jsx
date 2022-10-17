import { useState } from "react";
import Navbar from "../components/navbar";
import OtherNav from "../components/otherNavBar/OtherNav";
import "../assets/css/mobile.css";
import { Footer } from "../pages/home/styles";

const HomepageLayout = ({ render }) => {
  const [burger, setBurger] = useState(false);
  return (
    <div>
      <Navbar setBurger={setBurger} />
      {render()}

      <OtherNav isBurger={burger} setBurger={setBurger} />
      <Footer>privacy and policy 2022</Footer>
    </div>
  );
};

export default HomepageLayout;
