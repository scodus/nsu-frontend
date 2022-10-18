import { useState } from "react";
import Navbar from "../components/navbar";
import OtherNav from "../components/otherNavBar/OtherNav";
import "../assets/css/mobile.css";
import { Footer } from "../pages/home/styles";
import OtherNavSidebarMobile from "../components/otherNavBar/OtherNavSidebarMobile";
import { Link } from "react-router-dom";
import ScodusLogo from "../assets/scodus.png";
import AnimatedPage from "../components/Animations/AnimatedPage";

const HomepageLayout = ({ render }) => {
  const [burger, setBurger] = useState(false);
  const [mobileBurger, setMobileBurger] = useState(false);
  return (
    <div>
      <Navbar setBurger={setBurger} setMobileBurger={setMobileBurger} />

      <AnimatedPage>
        {render()}
      </AnimatedPage>

      
      <OtherNav isBurger={burger} setBurger={setBurger} isMobileBurger={mobileBurger} setMobileBurger={setMobileBurger} />
      <OtherNavSidebarMobile isBurger={mobileBurger} setBurger={setMobileBurger} />



      <Footer className="footer-mobile">
        <p className="font-size-12">&#169; NSU Tech Fest</p>

        <div className="footer-link-container">
          <Link to="/privacy" className="color-white">Privacy Policy</Link>
          <Link to="/termsandcondition" className="color-white">Terms and Conditions</Link>
        </div>

        <div className="company-link">
          <p className="font-size-12">Developed By</p>
          <a href="https://scodus.com/" target="_blank" rel="noreferrer">
            <img src={ScodusLogo} alt="scodus logo" />
          </a>
        </div>

      </Footer>
    </div>
  );
};

export default HomepageLayout;
