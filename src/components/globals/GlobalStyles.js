import { createGlobalStyle } from "styled-components";
import { setColor, setFont } from "../../helperFunctionsStyles";

const Globals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,900;1,300;1,400&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    color : ${setColor.mainBlack};
    background: #fff;
    font-family : ${setFont.mainFont};
    font-size : 100%;
}
`;

export default Globals;
