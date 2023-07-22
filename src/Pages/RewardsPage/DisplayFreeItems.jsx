import './DisplayFreeItems.scss'

function DisplayFreeItems(props) {
    const image1 = 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png'
    return (


        <div className="starExchange">
            <div className='outerContainer'>
                <div className="imageContainer">
                    <img src={props.image}></img>
                </div>
                <content className='starContent'>
                    <h3>{props.title}</h3>
                    <p>{props.paragraph}</p>
                </content>
            </div>
        </div>
    )
}

export default DisplayFreeItems