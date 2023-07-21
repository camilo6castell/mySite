import Avatar from "../avatar/avatar";
import BtnAlfa from "../btnAlfa/btnAlfa";
import IconSocial from "../iconSocial/iconSocial";
import Presentation from "../presentation/presentation";

function Welcome() {
    return (
        <section className="welcome">
            <div className="welcome-social">
                <IconSocial/>
                <IconSocial/>
            </div>
            <div className="welcome-content">
                <Presentation/>
                <BtnAlfa/>
            </div>
            <div className="myimg">
               <Avatar/>
            </div>
        </section>
    )
}

export default Welcome;