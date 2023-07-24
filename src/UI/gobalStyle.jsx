import { createGlobalStyle } from "styled-components";

import root from "./conf/root";
import reset from "./conf/reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${root}
`

export default GlobalStyle;
