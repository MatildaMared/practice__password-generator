import {createGlobalStyle} from "styled-components";

const Variables = createGlobalStyle`
  :root {
    --color-background: hsla(250, 14%, 10%, 1.0);
    --color-background-lighter: hsla(247, 11%, 15%, 1.0);
    --color-text: hsla(252, 11%, 91%, 1.0);
    --color-text-darker: hsla(251, 9%, 53%, 1.0);
    --color-primary: #A4FFAF;
  }
`;

export default Variables;