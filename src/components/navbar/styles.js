import styled from "styled-components";
import btn from "./../../assets/contact-btn.png";

const NavbarParent = styled.div`
  width: 100vw;
  height: 40px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 100px;
  color: #fff;
`;

const NavbarMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75rem;
  transform: translateX(4rem);
`;

const NavbarCenterLeft = styled.div`
  display: flex;
  width: 30rem;
  justify-content: space-between;

  > * {
    /* margin: 0 10px; */
    font-family: "polaris";
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
const NavbarCenterRight = styled.div`
  display: flex;
  width: 33rem;
  justify-content: space-around;

  > * {
    /* margin: 0 10px; */
    font-family: "polaris";
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const CenterTitle = styled.div`
  margin: 0 4.5rem;
  font-family: "paladins";
  letter-spacing: 0.01em;
  font-size: 16px;
  font-weight: 400;
`;

const ContactBtn = styled.div`
  cursor: pointer;
  background: url(${btn});
  background-size: cover;
  width: 12.4rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "polaris";
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: uppercase;
`;

export {
  NavbarParent,
  NavbarMiddle,
  NavbarCenterLeft,
  NavbarCenterRight,
  CenterTitle,
  ContactBtn,
};
