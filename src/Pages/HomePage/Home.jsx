import { useState, useEffect } from "react"
import NavigationBar from "../../Components/Navigation/NavigationBar"

function Home() {
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
            <NavigationBar handleNoScroll={handleNoScroll} />
        </>
    )
}

export default Home