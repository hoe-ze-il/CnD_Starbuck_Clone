import { Link } from "react-router-dom"
import "./Sidebar.scss"

function Sidebar() {
    return (
        <div className="sidebar">
            <p>Drinks</p>
            <ul>
                <Link to="/Oleato™">Oleato</Link>
                <Link to="/Hot Coffees">Hot Coffees</Link>
                <Link to="/Hot Teas">Hot Teas</Link>
                <Link to="/Hot Drinks">Hot Drinks</Link>
                <Link to="/Frappuccino® Blended Beverages">Frappuccino® Blended Beverages</Link>
                <Link to="/Cold Coffees">Cold Coffees</Link>
                <Link to="/Iced Teas">Iced Teas</Link>
                <Link to="/Cold Drinks">Cold Drinks</Link>

            </ul>
            <p>Foods</p>
            <ul>
                <Link to="/Hot Breakfast">Hot Breakfast</Link>
                <Link to="/Oatmeal & Yogurt">Oatmeal & Yougurt</Link>
                <Link to="/Bakery">Bakery</Link>
                <Link to="/Lunch">Lunch</Link>
                <Link to="/Snacks & Sweets">Snacks & Sweets</Link>
            </ul>
            <p>At Home Coffee</p>
            <ul>
                <Link to="/Whole Bean">Whole Bean</Link>
                <Link to="/VIA® Instant">VIA® Instant</Link>
            </ul>
            <p>Merchandise</p>
            <ul>
                <Link to="/VIA® Instant">VIA® Instant</Link>
                <Link to="/Tumblers">Tumblers</Link>
                <Link to="/Mugs">Mugs</Link>
                <Link to="/Other">Other</Link>
            </ul>
        </div>
    )
}

export default Sidebar