import data from "../../Data/cat_subcat.json"
import DisplayMenu from "./DisplayMenu";
import "./Menu.scss"
import Sidebar from "./Sidebar";
import NavigationBar from "../../Components/Navigation/NavigationBar"
import { useState, useEffect } from "react"


function Menu() {
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


    return (
        <>
            <NavigationBar handleNoScroll={handleNoScroll} />
            <main className="main_container">
                <div className="sidebar-container">
                    <Sidebar />
                </div>

                <h1>Menu</h1>
                <section className="menu drinks">
                    <div className="category">
                        <h2>Drinks</h2>
                        <hr />
                    </div>

                    {drinks.map((item) => (
                        <>{DisplayMenu(item)}</>
                    ))}
                </section>
                <section className="menu food">
                    <div className="category">
                        <h2>Foods</h2>
                        <hr />
                    </div>
                    {food.map((item) => (
                        <>{DisplayMenu(item)}</>
                    ))}
                </section>
                <section className="menu at-home-coffee">
                    <div className="category">
                        <h2>At Home Coffee</h2>
                        <hr />
                    </div>
                    {atHomeCoffee.map((item) => (
                        <>{DisplayMenu(item)}</>
                    ))}
                </section>
                <section className="menu food">
                    <div className="category">
                        <h2>Merchandise</h2>
                        <hr />
                    </div>
                    {merchandise.map((item) => (
                        <>{DisplayMenu(item)}</>
                    ))}
                </section>

            </main>
        </>
    )
}

export default Menu