import { Link } from "react-router-dom"

function DisplayItems(props) {
    return (
        <Link to={`/${props.item_type}/${props.item_id}`} className="items" >
            <img src={props.item_img_path} />
            <p>{props.item_name}</p>
        </Link>


    )

}

export default DisplayItems