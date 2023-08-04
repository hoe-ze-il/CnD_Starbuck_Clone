import "./PreviousOrder.scss"
import moon from "./moon-phases.webp"
import NavigationBar from "../../Components/Navigation/NavigationBar"
import MenuNavBar from "../MenuPages/MenuNavBar"
function PreviousOrder() {
    const handleNoScroll = () => {
        return
    }
    return (
        <>
        <NavigationBar handleNoScroll={handleNoScroll}/>
        <MenuNavBar />
            <div className="previous-main">
                <h2 className="previous-order">Previous Order</h2>
                <div className="gif">
                    <img
                    className="sb-imageFade__show"
                    src={moon}
                    alt="Animated illustration shows phases of the moon"
                    />
                </div>
                <h2 className="h2-text">
                    When history repeats <br />
                    itself
                </h2>
                <p className="p-text">
                    Previous orders will appear here to <br />
                    quickly order again.
                </p>
                
                <button className="button button-dark-outline sign-in">Sign in</button>
                <button className="button button-dark join-now">Join now</button>
            </div>
        </>
        

    )
}

export default PreviousOrder