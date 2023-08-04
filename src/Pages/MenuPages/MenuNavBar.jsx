import { Link } from "react-router-dom"
import "./MenuNavBar.scss"

function MenuNavBar() {
    return (
        <>
            <div className="menu-navigation">
                <Link to="/menu">All products</Link>
                <Link to="/">Featured</Link>
                <Link to="/previous_order">Previous Orders</Link>
                <Link to="/">Favorite Products</Link>
            </div>
            <hr />
        </>
    )
}

export default MenuNavBar