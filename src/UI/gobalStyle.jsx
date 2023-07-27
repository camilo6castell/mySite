import { createGlobalStyle } from "styled-components";

import root from "./conf/root";
import reset from "./conf/reset";
import keyframes from "./conf/keyframes";

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${root}
    ${keyframes}
`

export default GlobalStyle;
