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
        <div className="footer-event-information">
          <p className="font-size-12">&#169; NSU Tech Fest </p>
          <a href="https://www.instagram.com/nsuteschfest2022/" target="_blank">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100086146719747" target="_blank">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCEvQ29bAcV9iyX8wgZ8v_Bw" target = "_blank">
            <i class="bi bi-youtube"></i>
          </a>
        </div>
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
