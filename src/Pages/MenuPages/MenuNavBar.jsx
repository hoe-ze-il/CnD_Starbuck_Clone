import { Link } from "react-router-dom"
import "./MenuNavBar.scss"

function MenuNavBar() {
    return (
        <>
            <div className="menu-navigation">
                <Link to="/menu">All products</Link>
                <Link to="/">Featured</Link>
                <Link to="/favorite_products">Favorite Products</Link>
                <Link to="/previous_order">Previous Orders</Link>
            </div>
            <hr />
        </>
    )
}

export default MenuNavBar