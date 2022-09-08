import {createGlobalStyle} from "styled-components";
import fontUrl from "../assets/fonts/JetBrainsMono-VariableFont_wght.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "JetBrains Mono";
    src: url(${fontUrl});
  }

  html, #root {
    height: 100%;
  }

  body {
    background-color: var(--color-background);
    font-family: "JetBrains Mono", monospace;
    color: var(--color-text);
    min-height: 100%;
  }

  p, span {
    font-size: 18px;
    line-height: 23px;
    font-weight: 700;
  }

  .heading-large {
    font-size: 32px;
    font-weight: 700;
    line-height: 43px;
  }

  .heading-medium {
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    color: var(--color-text-darker);
  }
`;

export default GlobalStyles;