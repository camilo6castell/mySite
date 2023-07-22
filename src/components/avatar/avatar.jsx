import { useContext } from "react";
import { DataContext } from "../../dataContext/data";

function Avatar() {
    const dataContext = useContext(DataContext);
    return(
        <div className="myimg-circle">
            <span></span>
            <span></span>
            <div className="image">
                <img src={dataContext.avatar} alt="caTEST" />
            </div>
        </div>
    )
}

export default Avatar;