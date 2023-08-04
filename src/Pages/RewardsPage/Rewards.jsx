import "./Rewards.scss";
import { useState, useEffect } from "react";
import FreeItems from './FreeItems';
import EarnStars from './EarnStars';
import LinkDelta from './bootstrap_components/LinkDelta';
import NavigationBar from "../../Components/Navigation/NavigationBar";
import Footer from "../../Components/Footer/Footer";

function Rewards() {
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
            <nav className="rewards-page-navigation">
                <NavigationBar handleNoScroll={handleNoScroll} />
            </nav>
            
            <main className='rewards'>
                <header>
                    <div className="main-header">
                        <div>
                            <div className="text-content">
                                <h2>
                                    Free coffee <br /> is a tap away
                                </h2>
                                <p>Join now to start earning Rewards.</p>
                                <div>
                                    <button className="button button-green">Join Now</button>
                                    <p>
                                        Or <a href="">join in the app</a> for the best experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="section-1">
                    <div className="section-container">
                        <h2>Getting Started is easy</h2>
                        <p>Earn stars and getr rewarded in a few easy steps.</p>
                        <div className="instruction">
                            <div className="instruction-items">
                                <img
                                    src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"
                                    alt=""
                                />
                                <div>
                                    <h3>Create an account</h3>
                                    <p>
                                        To get started, <a href="">join now</a>. You can also{" "}
                                        <a href="">join in the app</a> to get access to the full range of
                                        Starbucks® Rewards benefits.
                                    </p>
                                </div>
                            </div>
                            <div className="instruction-items">
                                <img
                                    src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg"
                                    alt=""
                                />
                                <div>
                                    <h3>Order and pay how you’d like</h3>
                                    <p>
                                        Use cash, credit/debit card or save some time and pay right
                                        through the app. You’ll collect Stars all ways.{" "}
                                        <a href="">Learn how</a> Learn how
                                    </p>
                                </div>
                            </div>
                            <div className="instruction-items">
                                <img
                                    src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg"
                                    alt=""
                                />
                                <div>
                                    <h3>Earn Stars, get Rewards</h3>
                                    <p>
                                        As you earn Stars, you can redeem them for Rewards—like free food,
                                        drinks, and more. Start redeeming with as little as 25 Stars!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FreeItems />
                <section className="section-2">
                    <div className="section-container">
                        <h2>Endless Extras</h2>
                        <p>
                            Joining Starbucks® Rewards means unlocking access to exclusive benefits.
                            Say hello to easy ordering, tasty Rewards and—yes, free coffee.
                        </p>
                        <div className="instruction">
                            <div className="instruction-items larger-img">
                                <img
                                    src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
                                    alt=""
                                />
                                <div>
                                    <h3>Create an account</h3>
                                    <p>
                                        Not only can you earn free coffee, look forward to a birthday
                                        treat plus coffee and tea refills.
                                    </p>
                                    <a href="">Learn more</a>
                                </div>
                            </div>
                            <div className="larger-img instruction-items">
                                <img
                                    src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
                                    alt=""
                                />
                                <div>
                                    <h3>Order and pay how you’d like</h3>
                                    <p>
                                        Use cash, credit/debit card or save some time and pay right
                                        through the app. You’ll collect Stars all ways.{" "}
                                    </p>
                                    <a href="">Learn how</a>
                                </div>
                            </div>
                            <div className="instruction-items larger-img">
                                <img
                                    src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
                                    alt=""
                                />
                                <div>
                                    <h3>Earn Stars, get Rewards</h3>
                                    <p>
                                        As you earn Stars, you can redeem them for Rewards—like free food,
                                        drinks, and more. Start redeeming with as little as 25 Stars!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <EarnStars />
                <LinkDelta />
            </main>
            <Footer />
        </>
    )
}

export default Rewards