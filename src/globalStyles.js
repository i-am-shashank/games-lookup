import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    padding: 0;
    background: #222222;
    color: #cccccc;
    font-family: 'Quicksand', sans-serif;
  }
`;

export default GlobalStyles;
