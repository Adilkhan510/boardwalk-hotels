import styled from "styled-components";
import { setFlex, setBackground } from "../../helperFunctionsStyles";

const Hero = styled.header`
  min-height: 100vh;
  ${(props) => setBackground({ img: props.img })};
  ${setFlex({ x: "center", y: "center" })}
`;

export default Hero;
