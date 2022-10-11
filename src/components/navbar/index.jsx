import {
  NavbarCenterLeft,
  NavbarMiddle,
  NavbarParent,
  NavbarCenterRight,
  ContactBtn,
  NavLink,
  NavCenterLink,
  Icon,
} from "./styles";
import { ReactComponent as MenuIcon } from "./../../assets/hamburger.svg";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  // use this to render navbar active link
  const renderActive = (item) => {
    return pathname.slice(1) === item ? "active" : "deactive";
  };
  // --------------------------

  return (
    <NavbarParent>
      <Icon>
        <MenuIcon />
      </Icon>
      <NavbarMiddle>
        <NavbarCenterLeft>
          <NavLink active={renderActive("hackathon")} to={"/hackathon"}>
            hackathon
          </NavLink>
          <NavLink to="#">startup ideas</NavLink>
        </NavbarCenterLeft>
        <NavCenterLink active={renderActive("")} to="/">
          NSU
        </NavCenterLink>
        <NavbarCenterRight>
          <NavLink to="#">exhibition</NavLink>
          <NavLink to="#">robo wars</NavLink>
        </NavbarCenterRight>
      </NavbarMiddle>
      <ContactBtn>Contact Us</ContactBtn>
    </NavbarParent>
  );
};

export default Navbar;
