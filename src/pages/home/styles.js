import styled, { css } from "styled-components";
import background from "./../../assets/homepageHero.png";
import DoubleButton from "./../../assets/events/double-btn.svg";

const centerElement = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeParent = styled.div`
  background: linear-gradient(180deg, #000032 0%, #171720 100%);
`;

const Header = styled.div`
  width: 100vw;
  height: 90vh;
  object-fit: cover;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const GuestArea = styled.div`
  width: 100vw;
  /* background-color: #0d0d28; */
  color: #fff;
  padding-top: 6.8rem;
  position: relative;
`;

const GuestAreaTitle = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "grave";
  color: #dae0d1;
  font-size: 25px;
  font-weight: 400;
  text-shadow: 0px 11px 23px rgba(12, 255, 240, 0.25);
  margin-top: 7rem;
  line-height: 31.14px;
  text-align: center;
`;
const SpaceBetweenFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(0deg, #0d0d28, #0d0d28);
`;

const Hexagon = styled.div`
  width: 15rem;
  height: 17rem;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
`;

const HexagonWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
  display: flex;
  > * {
    margin: 0 5.5rem;
  }
`;

const HexagonParent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HexagonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "polaris";
  font-size: 12px;
  letter-spacing: 0.045em;
  color: #fff;
  margin-top: 1.5rem;
  text-transform: uppercase;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const EventArea = styled.div`
  width: 100vw;
  /* background-color: #0d0d28; */
  display: flex;
  justify-content: space-between;
  padding: 11rem 11rem 5rem 11rem;
`;

const EventLeft = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 40vw;
`;

const EventRight = styled.div`
  color: #fff;
  display: flex;
`;

const EventRightImageCol1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -5rem;
`;
const EventRightImageCol2 = styled.div``;
const EventRightImageParent = styled.div`
  width: 29.5rem;
  height: 33.2rem;
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;
const EventRightImage = styled.img`
  width: 75%;
  height: 75%;
  margin-left: 3rem;
  z-index: 11;
`;

const EventRightBlur = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
`;

const EventHeading = styled.div`
  width: 35.4rem;
  font-family: "grave";
  font-size: 35px;
  line-height: 45.52px;
  color: #dae0d1;
  margin-bottom: 4rem;
`;

const EventDescription = styled.div`
  font-family: "polaris";
  text-transform: "uppercase";
  color: #9ca095;
  font-weight: 400;
  font-size: 14px;
  text-shadow: 0px 11px 23px rgba(12, 255, 240, 0.25);
  margin-bottom: 4.5rem;
`;

const EventButton = styled.div`
  ${centerElement}
  background-image: url(${DoubleButton});
  width: 13rem;
  height: 4.5rem;
  background-size: cover;
  font-family: "polaris";
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`;

const DateImageParent = styled.div`
  position: relative;
  /* height: 500px;
  width: 100vw; */
`;

const DateImageItem = styled.img`
  object-fit: cover;
`;
const DateImageOverlay = styled.div`
  ${centerElement}
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1e149d;
  mix-blend-mode: darken;
  opacity: 0.9;
`;

const DateText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DateTextHeading = styled.div`
  font-family: "grave";
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1.6rem;
  text-align: center;
  width: 100vw;
`;

const DateTextItem = styled.div`
  font-family: "polaris";
  font-weight: 400;
  font-size: 14px;
  line-height: 192.06%;
  text-align: center;
  text-transform: uppercase;
  color: #f3f3f6;
  max-width: 80rem;
  margin-top: 10px;
`;

const SponsorParent = styled.div`
  ${centerElement}
  width: 100vw;
  height: 25rem;
  color: #fff;
`;

const SponsorImage = styled.img`
  margin: 3rem;
`;

const Footer = styled.div`
  padding: 2rem 16rem;
  font-family: "polaris";
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #a9a9a9;
  border-top: 1px solid #757171;
`;

export {
  Header,
  GuestArea,
  HomeParent,
  GuestAreaTitle,
  SpaceBetweenFlex,
  Hexagon,
  HexagonWrapper,
  HexagonParent,
  HexagonText,
  StyledImage,
  EventArea,
  EventLeft,
  EventRight,
  EventRightImageParent,
  EventRightImage,
  EventRightImageCol1,
  EventRightImageCol2,
  EventRightBlur,
  EventHeading,
  EventDescription,
  EventButton,
  DateImageParent,
  DateImageItem,
  DateImageOverlay,
  DateText,
  DateTextHeading,
  DateTextItem,
  SponsorParent,
  SponsorImage,
  Footer,
};
