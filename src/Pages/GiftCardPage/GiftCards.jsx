import "./GiftCards.scss"
import { useState, useEffect, useRef } from "react"
import Feature from "./Feature"
import NavigationBar from "../../Components/Navigation/NavigationBar"
import Footer from "../../Components/Footer/Footer"

function GiftCards() {
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
  return (
    <>
    <nav className="gift-cards-navigation">
      <NavigationBar handleNoScroll={handleNoScroll} />
    </nav>
    
      <Feature></Feature>
      <div className="gifts-bulk">
        <div>
          <img src="./images/gift-cards-img/bulk-gift-cards.jpg" alt="Gift cards in bulk" />
        </div>
        <div className="content-container">
          <h2>Gift Cards in Bulk</h2>
          <p>There’s an easier way to buy Starbucks Cards in bulk!
            Give a Starbucks Card to gift, reward, incentivize, or show appreciation towards your customers, clients and team members.</p>
          <button className="button button-dark-outline">Shop now</button>
        </div>
      </div>

      <div className="gift-card-support">
        <h2>GIFT CARD SUPPORT</h2>
        <p>Use the links below to manage eGifts you have sent or received, or view our full Card Terms & Conditions.</p>
        <button className="button button-dark-outline">eGift Support</button>
        <button className="button button-dark-outline">See Term & Conditions</button>
        <button className="button button-dark-outline">eGift FAQs</button>
      </div >
      <footer className="gift-cards-footer">
      <Footer />
      </footer>
      
    </>
  )
}

export default GiftCards
