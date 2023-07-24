import Avatar from "../avatar/avatar";
import BtnAlfa from "../btnAlfa/btnAlfa";
import IconSocial from "../iconSocial/iconSocial";
import Presentation from "../presentation/presentation";

import { SectionWStyled } from "../../UI/styledComponents/StyledComponents";

function Welcome({ dataContext }) {
    
    return (
        <SectionWStyled id="home">
            <div className="welcome-social">
                {
                    dataContext.social.map((data) => <IconSocial key={data.name} data={data} mode={dataContext.theme}/> )
                }
            </div>
            <div className="welcome-content">
                <Presentation data={dataContext.info}/>
                <BtnAlfa data={dataContext.theme}/>
            </div>
            <div className="myimg">
               <Avatar data={dataContext.info} mode={dataContext.theme}/>
            </div>
        </SectionWStyled>
    )
}

export default Welcome;