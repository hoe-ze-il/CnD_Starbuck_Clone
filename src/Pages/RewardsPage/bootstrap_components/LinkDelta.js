import React, { useState, useEffect } from "react";
import "./LinkDelta.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";

function LinkDelta() {
  const [star1, setStar1] = useState("");
  const [star2, setStar2] = useState("");
  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const newStar1 =
        viewportWidth >= 768
          ? "https://www.starbucks.com/app-assets/7997fb008f368630d3ca3c1194fd8404.svg"
          : "https://www.starbucks.com/app-assets/c7d010ad5c5f6c00d5446d2f8c652c42.svg";
      setStar1(newStar1);
      const newStar2 =
        viewportWidth >= 768
          ? "https://www.starbucks.com/app-assets/b7e1b20df72e802cb1cf0e97e8fe21d0.svg"
          : "https://www.starbucks.com/app-assets/c87d1677e476d2d20e5f114e5068d2cd.svg";
      setStar2(newStar2);
    };
    // Set the initial image source on component mount
    handleResize();


    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <section>
      <div className="outer-box">
        <div className="content-inner">
          <div className="link-delta row">
            <div className="star-image-1 col-md-3">
              <img src={star1}></img>
            </div>
            <div className="info col-md-6">
              <div className="main-content-delta">
                <h2>Keep the Rewards Coming</h2>
                <p>
                  The Rewards don't stop at your morning coffee. Join Starbucks®
                  Rewards and unlock perks from our partners, all while earning
                  more Stars.
                </p>
              </div>
              <div className="sub-content">
                <img src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png"></img>
                <p>
                  <a
                    href="https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042"
                    target="_blank"
                  >
                    Link your Delta SkyMiles®
                  </a>{" "}
                  and Starbucks® Rewards accounts to earn 1 mile per $1* spent
                  at Starbucks and double Stars on Delta travel days.
                </p>
                <button className="button button-green">
                  Join Starbucks® Rewards
                </button>
              </div>
            </div>
            <div className="star-image-2 col-md-3">
              <img src={star2}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LinkDelta;
