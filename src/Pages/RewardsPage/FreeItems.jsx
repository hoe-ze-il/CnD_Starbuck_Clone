import React, { useState } from 'react'
import './FreeItems.scss'
import DisplayFreeItems from './DisplayFreeItems'

const contents_array = [
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png',
        title: 'Customize your drink',
        paragraph: 'Make your drink just right with an extra espresso shot, nondiary milk or a dash of your favorite syrup',
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png',
        title: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
        paragraph: 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.',
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png',
        title: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
        paragraph: 'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.',
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png',
        title: 'Sandwich, protein box or at-home coffee',
        paragraph: 'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.',
    },
    {
        image: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png',
        title: 'Select Starbucks® merchandise',
        paragraph: 'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.',
    }
]

function FreeItems() {
    const [activeContentIndex, setActiveContentIndex] = useState(0)
    return (
        <div>
            <div id='tabs'>
                <div>
                    <h2>Get your favorites for free</h2>
                    <menu>
                        <button
                            className={activeContentIndex === 0 ? "active" : ""}
                            onClick={() => setActiveContentIndex(0)}
                        >
                            25<span className='star'>★</span>
                        </button>
                        <button
                            className={activeContentIndex === 1 ? "active" : ""}
                            onClick={() => setActiveContentIndex(1)}
                        >
                            100<span className='star'>★</span>
                        </button>
                        <button
                            className={activeContentIndex === 2 ? "active" : ""}
                            onClick={() => setActiveContentIndex(2)}
                        >
                            200<span className='star'>★</span>
                        </button>
                        <button
                            className={activeContentIndex === 3 ? "active" : ""}
                            onClick={() => setActiveContentIndex(3)}
                        >
                            300<span className='star'>★</span>
                        </button>
                        <button
                            className={activeContentIndex === 4 ? "active" : ""}
                            onClick={() => setActiveContentIndex(4)}
                        >
                            400<span className='star'>★</span>
                        </button>


                    </menu>
                </div>
                <div className='tab-content'>
                    {DisplayFreeItems(contents_array[activeContentIndex])}
                </div>
            </div>
        </div>
    )
}

export default FreeItems