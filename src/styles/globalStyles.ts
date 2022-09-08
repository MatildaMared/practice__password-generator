import {createGlobalStyle} from "styled-components";
import fontUrl from "../assets/fonts/JetBrainsMono-VariableFont_wght.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "JetBrains Mono";
    src: url(${fontUrl});
  }

  body {
    background-color: var(--color-background);
    font-family: "JetBrains Mono", monospace;
  }
`;

export default GlobalStyles;