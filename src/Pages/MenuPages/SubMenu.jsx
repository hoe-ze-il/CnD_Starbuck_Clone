import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import data from "../../Data/sub_type.json";
import DisplaySubMenu from "./DisplaySubMenu";
import Sidebar from "./Sidebar";
import MenuNavBar from "./MenuNavBar";
import NavigationBar from "../../Components/Navigation/NavigationBar";
import "./SubMenu.scss"
import Footer from "../../Components/Footer/Footer";


function SubMenu() {
    const [noScroll, setNoScroll] = useState(false);

    const handleNoScroll = (isNavOpen) => {
        setNoScroll(isNavOpen);
    };
    console.log(noScroll)

    useEffect(() => {
        if (noScroll) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [noScroll]);

    const drinks = [];
    const food = [];
    const atHomeCoffee = [];
    const merchandise = [];
    for (const item of data) {
        if (item.categories === "Drinks") {
            drinks.push(item)
        }
        else if (item.categories === "Food") {
            food.push(item)
        }
        else if (item.categories === "At Home Coffee") {
            atHomeCoffee.push(item)
        }
        else {
            merchandise.push(item)
        }
    }

    const { sub_category } = useParams()


    const subCatItem = []

    for (const item of data) {
        if (item.sub_category === sub_category) {
            subCatItem.push(item)
        }
    }

    return (
        <>
        <nav className="sub-menu-navigation">
            <NavigationBar handleNoScroll={handleNoScroll} />
        </nav>
            
            <MenuNavBar />
            <div className="sub-menu-container">
                <div className="sidebar-container">
                    <Sidebar />
                </div>

                <header>
                    <p><Link to="/menu">Menu</Link> / {subCatItem[0].sub_category}</p>
                    <h1>{subCatItem[0].sub_category}</h1>
                </header>

                <div className="sub-menu">
                    <section className="item-type">
                        {subCatItem.map((item) => (
                            <>{DisplaySubMenu(item)}</>
                        ))}
                    </section>

                </div>

            </div>
            <footer className="menu-footer">
                <Footer />
            </footer>
        </>
    )
}

export default SubMenu