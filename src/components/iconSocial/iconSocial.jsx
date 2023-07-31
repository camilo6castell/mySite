import { styled } from "styled-components";

function IconSocial({ data, mode }) {
    return(
        <StyledIconSocial href={data.link} data={data} mode={mode} target="_blank" rel="noreferrer"><i className={data.icon} alt={data.name}></i></StyledIconSocial >
    )
}

const StyledIconSocial = styled.a`
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
        justify-content: space-around;
        align-items: center;

        aspect-ratio: 1 / 1;
        background: linear-gradient(45deg, ${({ data }) => data.color[0]}, ${({ data }) => data.color[1]});
        border-radius: 50%;



        width: 3vw;
        font-size: 1.7vw;

        

        color: white;
        text-decoration: none;
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
    i {
        transform: translateY(.1vw);
    }
`
export default IconSocial;