import { StyledHeader } from "../../UI/styledComponents/StyledComponents";

import Avatar from "../avatar/avatar";
import Presentation from "../presentation/presentation";

import { useContext } from "react";
import { DataContext } from "../../dataContext/data.jsx";
import IconSocial from "../iconSocial/iconSocial";


function Header() {
    const data = useContext(DataContext);
    const mode = data.theme
    return (
        <StyledHeader  data={data} >
            <div className="title-container">
                <h1 className="title">Portafolio</h1>
            </div>
            <div className="presentation-container">
                <div className="avatar-container">
                    <Avatar data={data.info} mode={data.theme}/>
                </div>
                <div className="info-container">
                    <Presentation data={data.info}/>
                </div>
            </div>            
            <nav className="social-container">
                <div className="title-social-container">
                    <h1 className="title-social">Redes Sociales</h1>
                </div>
    
                <div className="box-social">
                    {
                        data.social.map((data) => <IconSocial key={data.name} data={data} mode={mode}/> )
                    }
                </div>
            </nav>
        </StyledHeader>
    )
}

export default Header