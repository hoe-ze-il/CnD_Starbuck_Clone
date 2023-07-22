import { useState, useEffect } from "react"
import NavigationBar from "../../Components/Navigation/NavigationBar"
import Footer from "../../Components/Footer/Footer";
import "./Home.scss"

function Home() {
    // to control whether scrolling is disabled (when mobile menu is opened)
    const [noScroll, setNoScroll] = useState(false);

    const handleNoScroll = (isNavOpen) => {
        setNoScroll(isNavOpen);
    };

    // to apply or remove 'no-scroll' class to the body element (based on noScroll state)
    useEffect(() => {
        if (noScroll) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [noScroll]);
    return (
        <>
            <NavigationBar handleNoScroll={handleNoScroll} />
            <section className="box reverse" id="box1">
                <div className="content-container">
                    <div className="content">
                        <h1>Talk about refreshing</h1>
                        <p>
                            Introducing our vibrant new Frozen Lemonade Starbucks Refreshers®
                            beverages: Strawberry Açaí, Pineapple Passionfruit and Mango
                            Dragonfruit.
                        </p>
                        <button className="button button-dark-outline">Order now</button>
                    </div>
                </div>
                <div className="drinks">
                    <img
                        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84430.jpg"
                        alt=""
                    />
                </div>
            </section>
            <section className="box" id="box2">
                <div className="drinks">
                    <img
                        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84431.jpg"
                        alt=""
                    />
                </div>
                <div className="content-container">
                    <div className="content">
                        <h1>Soak up delicious Rewards</h1>
                        <p>You’re closer than you think to free drinks &amp; food.*</p>
                        <button className="button button-dark-outline">Order now</button>
                    </div>
                </div>
            </section>
            <section className="box reverse" id="box3">
                <div className="content-container">
                    <div className="content">
                        <h1>Summer to the max</h1>
                        <p>
                            Go for a Mocha Cookie Crumble or Caramel Ribbon Crunch Frappuccino®
                            blended beverage.
                        </p>
                        <button className="button button-dark-outline">Order now</button>
                    </div>
                </div>
                <div className="drinks">
                    <img
                        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84432.jpg"
                        alt=""
                    />
                </div>
            </section>
            <section className="box" id="box4">
                <div className="drinks">
                    <img
                        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84433.jpg"
                        alt=""
                    />
                </div>
                <div className="content-container">
                    <div className="content">
                        <h1>Get there satisfied</h1>
                        <p>
                            Fill up on the way with a Spinach, Feta &amp; Egg White Wrap or Bacon,
                            Sausage &amp; Egg Wrap.
                        </p>
                        <button className="button button-dark-outline">Order now</button>
                    </div>
                </div>
            </section>
            <section className="box reverse" id="box5">
                <div className="content-container">
                    <div className="content">
                        <h1>Be kind to your mind</h1>
                        <p>
                            We teamed up with Headspace to bring you four free meditations on
                            kindness, plus a special offer for Starbucks® Rewards members—discover
                            more mindfulness with a two-month free membership.**
                        </p>
                        <button className="button button-dark-outline">Listen now</button>
                    </div>
                </div>
                <div className="drinks">
                    <img
                        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84617.jpg"
                        alt=""
                    />
                </div>
            </section>
            <div className="note">
                <p>
                    *Starbucks Rewards is available at participating stores. Some restrictions
                    apply. See
                    <a href="https://starbucks.com/rewards">https://starbucks.com/rewards</a>
                </p>
            </div>
            <div className="note">
                <p>
                    **After your two-month free trial, exclusive to Starbucks® Rewards
                    members, the subscription renews automatically at $69.99 USD for an annual
                    subscription to Headspace. You can cancel at any time. This offer is for
                    new and returning Headspace users only.
                </p>
            </div>
            <Footer />
        </>
    )
}

export default Home