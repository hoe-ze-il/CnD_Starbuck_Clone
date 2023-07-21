import './EarnStars.scss'

function EarnStars() {
    return (
        <section className='section-3'>
            <div className="content-inner-3">
                <header>
                    <h2>Cash or card, you earn Stars</h2>
                    <p>
                        No matter how you pay, you can earn Stars with your morning coffee.
                        Those Stars add up to (really delicious) Rewards.
                    </p>
                </header>
                <div className="star-per-dollar">
                    <div className="content-header">
                        <h3>1★ Star per dollar</h3>
                        <p>Pay as you go</p>
                    </div>
                    <div className="cards">
                        <div className="image-container">
                            <img
                                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
                                alt=""
                            />
                        </div>
                        <div className="content-container">
                            <h4>Scan and pay separately</h4>
                            <p>Use cash or credit/debit card at the register.</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="image-container">
                            <img
                                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
                                alt=""
                            />
                        </div>
                        <div className="content-container">
                            <h4>Save payment in the app</h4>
                            <p>
                                Check-out faster by saving a credit/debit card or PayPal to your
                                account. You’ll be able to order ahead or scan and pay at the
                                register in one step.
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="star-per-dollar">
                    <div className="content-header">
                        <h3>2★ Star per dollar</h3>
                        <p>Add funds in the app</p>
                    </div>
                    <div className='cards'>
                        <div className='image-container'>
                            <img
                                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
                                alt=""
                            />
                        </div>
                        <div className='content-container'>
                            <h4>Preload</h4>
                            <p>
                                To save time and earn Stars twice as fast, add money to your digital
                                Starbucks Card using any payment option. Scan and pay in one step or
                                order ahead in the app.
                            </p>
                        </div>
                    </div>
                    <div className='cards'>
                        <div className='image-container'>
                            <img
                                src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
                                alt=""
                            />
                        </div>
                        <div className='content-container'>
                            <h4>Register your gift card</h4>
                            <p>
                                Then use it to pay through the app. You can even consolidate balances
                                from multiple cards in one place.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default EarnStars