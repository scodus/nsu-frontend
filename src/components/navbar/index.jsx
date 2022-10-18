import {
  NavbarCenterLeft,
  NavbarMiddle,
  NavbarParent,
  NavbarCenterRight,
  ContactBtn,
  NavLink,
  NavCenterLink,
  Icon
} from "./styles";
import { ReactComponent as MenuIcon } from "./../../assets/hamburger.svg";
import { useLocation } from "react-router-dom";
import NavBarMobile from "../otherNavBar/NavBarMobile";
import NSULOGO from "./../../assets/nsuLogo.png";

const Navbar = ({setBurger, setMobileBurger}) => {
  const { pathname } = useLocation();

  // use this to render navbar active link
  const renderActive = (item) => {
    return pathname.slice(1) === item ? "active" : "deactive";
  };
  // --------------------------

  const BurgerButtonHandler = () => {
    setBurger(true);
  }



  return (
    <>
      <NavBarMobile setMobileBurger = {setMobileBurger}>
      </NavBarMobile>

        <NavbarParent className="navbar-desktop">
          <Icon onClick={BurgerButtonHandler}>
            <MenuIcon />
          </Icon>
          <NavbarMiddle>
            <NavbarCenterLeft>
              <NavLink active={renderActive("hackathon")} to={"/hackathon"}>
                hackathon
              </NavLink>
              <NavLink active={renderActive("startup")} to={"/startup"}>
                startup ideas
              </NavLink>
            </NavbarCenterLeft>
            <NavCenterLink
              active={renderActive("")}
              to="/"
              state={{ clicked: true }}
            >
             <img src={NSULOGO} alt="" style={{width:"5rem"}} />
            </NavCenterLink>
            <NavbarCenterRight>
              <NavLink active={renderActive("exhibition")} to={"/exhibition"}>
                exhibition
              </NavLink>
              <NavLink active={renderActive("robowars")} to={"/robowars"}>
                robo wars
              </NavLink>
            </NavbarCenterRight>
          </NavbarMiddle>
          <ContactBtn><NavLink active={renderActive("contact")} to={"/contact"}>Contact Us</NavLink></ContactBtn>
        </NavbarParent>
      </>
      );
};

      export default Navbar;
