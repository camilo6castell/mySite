import { useContext } from "react";
import { DataContext } from "../../dataContext/data"

import Avatar from "../avatar/avatar";
import BtnAlfa from "../btnAlfa/btnAlfa";
import IconSocial from "../iconSocial/iconSocial";
import Presentation from "../presentation/presentation";

function Welcome() {
    const dataContext = useContext(DataContext)
    return (
        <section className="welcome">
            <div className="welcome-social">
                {
                    dataContext.social.map((data) => <IconSocial key={data.name} data={data}/> )
                }
            </div>
            <div className="welcome-content">
                <Presentation data={dataContext.info}/>
                <BtnAlfa/>
            </div>
            <div className="myimg">
               <Avatar/>
            </div>
        </section>
    )
}

export default Welcome;