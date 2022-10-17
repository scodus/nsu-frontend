import {
  GuestArea,
  GuestAreaTitle,
  Hexagon,
  SpaceBetweenFlex,
  HexagonWrapper,
  HexagonParent,
  HexagonText,
  StyledImage,
} from "./styles";
import { ReactComponent as LeftCube } from "./../../assets/left-cube.svg";
import { ReactComponent as RightCube } from "./../../assets/right-cube.svg";
import Alesso from "./../../assets/alesso.jpg";
import Post from "./../../assets/postmalone.jpg";
import Henri from "./../../assets/henri1.jpg";
import Tory from "./../../assets/tory.jpg";

const GuestSection = () => {
  return (
    <GuestArea className="guest-area-mobile">
      <SpaceBetweenFlex className="space-between-mobile">
        <LeftCube />
        <GuestAreaTitle><h1>Our Guests</h1></GuestAreaTitle>
        <HexagonWrapper className="guest-images-items-container-mobile">
          <HexagonParent className="guest-images-details">
            <Hexagon className="images-items-mobile">
              <StyledImage src={Post} />
            </Hexagon>
            <HexagonText>Post Lama</HexagonText>
          </HexagonParent>

          <HexagonParent className="guest-images-details">
            <Hexagon className="images-items-mobile">
              <StyledImage src={Alesso} />
            </Hexagon>
            <HexagonText>Alesso kumar</HexagonText>
          </HexagonParent>

          <HexagonParent className="guest-images-details">
            <Hexagon className="images-items-mobile">
              <StyledImage src={Henri} />
            </Hexagon>
            <HexagonText>G Eazy</HexagonText>
          </HexagonParent>

          <HexagonParent className="guest-images-details">
            <Hexagon className="images-items-mobile">
              <StyledImage src={Tory} />
            </Hexagon>
            <HexagonText className="guest-text">Tory Shah</HexagonText>
          </HexagonParent>
        </HexagonWrapper>
        <RightCube />
      </SpaceBetweenFlex>
    </GuestArea>
  );
};

export default GuestSection;
