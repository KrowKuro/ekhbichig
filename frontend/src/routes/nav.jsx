import { Link } from "react-router-dom";
import Logo from "../logo.png";

export default function Nav(props) {
    var route = "/";
    if(props.k === 1)
        route = "courses";
    return(
        <div className="nav">
            <div className="logo">
                <img src={Logo} height="50px" width="50px"/>
                <h2>Эх хэл бичгийн хөрвүүлгийн систем</h2>
            </div>
            <button className="button-18 course ">Хичээл</button>
        </div>
    );
}
