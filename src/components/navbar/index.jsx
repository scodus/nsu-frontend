import {
  NavbarCenterLeft,
  NavbarMiddle,
  NavbarParent,
  CenterTitle,
  NavbarCenterRight,
  ContactBtn,
} from "./styles";
import { ReactComponent as MenuIcon } from "./../../assets/hamburger.svg";

const Navbar = () => {
  return (
    <NavbarParent>
      <div>
        <MenuIcon />
      </div>
      <NavbarMiddle>
        <NavbarCenterLeft>
          <div>hackathon</div>
          <div>startup ideas</div>
        </NavbarCenterLeft>
        <CenterTitle>NSU</CenterTitle>
        <NavbarCenterRight>
          <div>exhibition</div>
          <div>robo wars</div>
        </NavbarCenterRight>
      </NavbarMiddle>
      <ContactBtn>Contact Us</ContactBtn>
    </NavbarParent>
  );
};

export default Navbar;
