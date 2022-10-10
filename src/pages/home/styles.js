import styled from "styled-components";
import background from "./../../assets/homepageHero.png";

const Header = styled.div`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export { Header };
