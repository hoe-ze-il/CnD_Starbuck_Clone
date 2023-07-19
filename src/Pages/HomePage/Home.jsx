import { useState, useEffect } from "react"
import NavigationBar from "../../Components/Navigation/NavigationBar"

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
        </>
    )
}

export default Home