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
    <GuestArea>
      <SpaceBetweenFlex>
        <LeftCube />
        <GuestAreaTitle>Our Guests</GuestAreaTitle>
        <HexagonWrapper>
          <HexagonParent>
            <Hexagon>
              <StyledImage src={Post} />
            </Hexagon>
            <HexagonText>Post Lama</HexagonText>
          </HexagonParent>

          <HexagonParent>
            <Hexagon>
              <StyledImage src={Alesso} />
            </Hexagon>
            <HexagonText>Alesso kumar</HexagonText>
          </HexagonParent>

          <HexagonParent>
            <Hexagon>
              <StyledImage src={Henri} />
            </Hexagon>
            <HexagonText>G Eazy</HexagonText>
          </HexagonParent>

          <HexagonParent>
            <Hexagon>
              <StyledImage src={Tory} />
            </Hexagon>
            <HexagonText>Tory Shah</HexagonText>
          </HexagonParent>
        </HexagonWrapper>
        <RightCube />
      </SpaceBetweenFlex>
    </GuestArea>
  );
};

export default GuestSection;
