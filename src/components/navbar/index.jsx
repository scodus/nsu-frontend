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
          <NavLink active={renderActive("startup")} to={"/startup"}>
            startup ideas
          </NavLink>
        </NavbarCenterLeft>
        <NavCenterLink
          active={renderActive("")}
          to="/"
          state={{ clicked: true }}
        >
          NSU
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
      <ContactBtn>Contact Us</ContactBtn>
    </NavbarParent>
  );
};

export default Navbar;
