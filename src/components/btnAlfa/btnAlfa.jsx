import { styled } from "styled-components";

function BtnAlfa({ data }) {
    return(
        <StyledBtnAlfa  href="#connect" data={data} onClick={() => console.log("conectado")}>Contrátame!</StyledBtnAlfa >
    )
}

const StyledBtnAlfa  = styled.a`
&::before {
    inset: 0;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, ${({ data }) => data.interfaceColor[0]}, ${({ data }) => data.interfaceColor[1]}, ${({ data }) => data.interfaceColor[2]});
    z-index: -1;
    border-radius: 40px;
    background-size: 200%;
    background-position: 0 0;
    filter: blur(5px);
    transition: .5s ease;
}

&:hover::before {
    background-position: 100% 0;
}

&& {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 48px;
    border-radius: 40px;
    /* background: red; <- mientras se desarrollo el estilo*/

    font-size: 19px;
    color: white;
    text-shadow: 0px 0px 10px black;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 1;

    opacity: 0;
    animation: slideTop 1s ease forwards;
    animation-delay: 1.8s;
}

&::after {
    inset: 0;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, ${({ data }) => data.interfaceColor[0]}, ${({ data }) => data.interfaceColor[1]}, ${({ data }) => data.interfaceColor[2]});
    background-position: 0 0;
    background-size: 200%;
    z-index: -1;
    border-radius: 40px;
    transition: .5s ease;
}

&:hover::after {
    background-position: 100% 0;
}

`

export default BtnAlfa;