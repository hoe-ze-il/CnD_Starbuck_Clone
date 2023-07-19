import { Link } from "react-router-dom"
import "./DisplayMenu.scss"

function DisplayMenu(props) {
    return (
        <Link className="sub-categories" to={`/${props.sub_category}`}>
            <img src={props.image_path}></img>
            <p>{props.sub_category}</p>
        </Link>

    )
}

export default DisplayMenu