import { createGlobalStyle } from "styled-components";

import root from "./root";
import reset from "./reset";
import keyframes from "./keyframes";

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${root}
    ${keyframes}
`

export default GlobalStyle;
