import { Link } from "react-router-dom"
import "./DisplayMenu.scss"

function DisplayMenu(props) {
    return (
        <Link className="sub-categories" to={`/${props.sub_category}`}>
            <img src={props.image_path} alt={props.sub_category}></img>
            <p>{props.sub_category}</p>
        </Link>

    )
}

export default DisplayMenu