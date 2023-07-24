import { styled } from "styled-components";

// import keyframes from "styled-components";

// const slideTop = keyframes`
//     0% {
//         opacity: 0;
//         transform: translateY(100px);
//     }
//     100% {
//         opacity: 1;
//         transform: translateY(0);
//     }
// `
// const slideTop = keyframes`
//     0% {
//         opacity: 0;
//         transform: translateY(100px);
//     }
//     100% {
//         opacity: 1;
//         transform: translateY(0);
//     }
// `

export const HeaderStyled = styled.header`
    & {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 20px 10%;
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;

        transition: 0.32 ease-in-out;
    }

    .scrolled {
        background: rgb(128, 0, 0);
    }

    .logo {
        font-size: 25px;
        color: #fff;
        font-weight: 600;
        pointer-events: none;

        opacity: 0;
        animation: slideTop 1s ease forwards;
    }

    .navbar a {
        display: inline-block;
        font-size: 18px;
        color: #fff;
        font-weight: 500;
        margin-left: 35px;

        opacity: 0;
        animation: slideTop .5s ease forwards;
        animation-delay: calc(.2s * var(--i));

    }

    .navbar a.active, .navbar a:hover {
        background: linear-gradient(45deg, ${({ data }) => data.interfaceColor[1]}, ${({ data }) => data.interfaceColor[2]});
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
`
export const AStyled = styled.a`
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, ${({ data }) => data.color[0]}, ${({ data }) => data.color[1]});
        border-radius: 50%;
        z-index: -1;
        transition: .5s ease;
    }
  
    &:hover::before {
        filter:blur(5px);
    }
  
    && {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, ${({ data }) => data.color[0]}, ${({ data }) => data.color[1]});
        border-radius: 50%;
        font-size: 20px;
        color: white;
        text-decoration: none;
        margin: 20px 0;
        z-index: 1;
        opacity: 0;
        animation: ${({ data }) => data.animation} 1s ease forwards;
        animation-delay: 2.1s;
    }
  
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${({ mode }) => mode.backgroundColor};
        border-radius: 50%;
        transform: scale(.88);
        z-index: -1;
        transition: .5s ease;
    }
  
    &:hover::after {
        transform: scale(0);
    }
`
export const BStyled = styled.a`
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
export const DivStyled = styled.div`
& {
    position: relative;
    width: 100%;
    height: 100%;
    /* background: yellowgreen; development*/
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite;
    animation-delay: 2.1s, 3.1s;
}

span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(${({data}) => data.avatar[0]}, ${({data}) => data.avatar[1]}, ${({data}) => data.avatar[0]}, ${({data}) => data.avatar[1]});
    border-radius: 50%;

    animation: circleRotate 5s linear infinite;
}

span:nth-child(1) {
    filter: blur(10px);
}

&::after {
    content: "";
    position: absolute;
    width: 380px;
    height: 380px;
    background: ${({mode}) => mode.backgroundColor};
    border-radius: 50%;
}

.image {
    position: relative;
    width: 380px;
    height: 380px;
    /* background: red; development*/
    border-radius: 50%;
    z-index: 1;
    overflow: hidden;
}

.image img {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 350px;
    object-fit: cover;
}
`
export const SectionWStyled = styled.section`
    & {
        width: 100%;
        height:100vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 70px 10% 0;
    }
  
    .welcome-social {
        display: inline;
  
        width: fit-content;
  
        /* background: yellow; development*/
    }
  
    .welcome-content {
        max-width: 500px;
         margin-left: -30px;
  
        /* background: yellow; development*/
    }
  
    .myimg {
        display: inline;
      
         width: 410px;
        height: 410px;
  
      /* background: red; development*/
    }
`
export const DivPStyled = styled.div`
    h1 {
        font-size: 56px;
        font-weight: 700;
        line-height: 1.2;

        opacity: 0;
        animation: slideRight 1s ease forwards;
        animation-delay: .7s;
    }

    h3 {
        font-size: 32px;
        font-weight: 700;

        opacity: 0;
        animation: slideLeft 1s ease forwards;
        animation-delay: .7s;
    }

    p {
        font-size: 16px;
        margin: 20px 0 40px;

        opacity: 0;
        animation: slideLeft 1s ease forwards;
        animation-delay: 1.3s;
    }
`
export const DivCStyled = styled.div`
    & {
        width: 300px;
        height: 400px;
        margin: 50px;

        border-radius: 10%;

        background: linear-gradient(90deg, #0ff0b49d, #036ed969);
        backdrop-filter: blur(10px);

        overflow: hidden;
        box-shadow: 0px 0px 15px -5px black;

        transition: 0.5s;
        animation: ease-in-out;
    }

    .card-content {
        padding:25px;
    }

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 15px 0px yellow;
    }

    .card-img img{
        overflow: hidden;
        width: 300px;

}
`