import "./FavoriteProducts.scss"
import tapes from "./fav-tapes.webp"
import NavigationBar from "../../Components/Navigation/NavigationBar"
import MenuNavBar from "../MenuPages/MenuNavBar"
function FavoriteProducts() {
    const handleNoScroll = () => {
        return
    }

    return (
        <>
        <NavigationBar handleNoScroll={handleNoScroll}/>
        <MenuNavBar />
        <div className="favorite-main">
            
            
      <h2 className="favorite-products">Favorite Products</h2>
      <div className="img-container">
        <img
          className="sb-imageFade__show"
          src={tapes}
          alt="Animated illustration shows phases of the moon"
        />
      </div>
      <h2 className="h2-text">Save your favorite mixes</h2>
      <p className="p-text">
        Use the heart to save customizations. <br />
        Your favorites will appear here to order <br />
        again.
      </p>
      
        <button className="button button-dark-outline sign-in">Sign in</button>
        <button className="button button-dark join-now">Join now</button>
      
    </div>
        </>
        

    )
}

export default FavoriteProducts