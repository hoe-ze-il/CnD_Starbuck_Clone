import Slide from "./Slide"
import { useState, useEffect, useRef } from "react"
import next from "./icons/right-arrow.png"
import back from "./icons/left-arrow.png"
import externalLink from "./icons/external-link-symbol.png"

function Slides(props) {
    const sliderRef = useRef(null)
    const nextButRef = useRef(null)
    const prevButRef = useRef(null)

    const [currentSlide, setCurrentSlide] = useState(0)
    const [slidePage, setSlidePage] = useState(0)
    const [oddItems, setOddItems] = useState(0)
    const [totalWidth, setTotalWidth] = useState(0)
    const [visibleSlides, setVisibleSlides] = useState([])
    const [slidesPerPage, setSlidesPerPage] = useState(4)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        };
        // Add event listener to track window resize
        window.addEventListener('resize', handleResize);

    }, []);

    const handleWindowWidthChange = () => {
        if (windowWidth <= 414) {
            setSlidesPerPage(2)
        }
        else if (windowWidth > 414 && windowWidth <= 768) {
            setSlidesPerPage(3)
        }
        else if (windowWidth >= 1024) {
            setSlidesPerPage(4)
        }
    }

    useEffect(() => {
        // Call the function when the component mounts and on window width change
        handleWindowWidthChange();
    }, [windowWidth]);

    useEffect(() => {
        const slidesRef = props.images.length
        if (slidesPerPage === 4) {
            setTotalWidth(slidesRef * 20)
        }
        else if (slidesPerPage === 3) {
            setTotalWidth(slidesRef * 30)
        }
        else if (slidesPerPage === 2) {
            setTotalWidth(slidesRef * 45)
        }
        console.log(totalWidth)

        setSlidePage(Math.ceil(slidesRef / slidesPerPage))
        setOddItems(slidesRef % slidesPerPage)
        prevButRef.current.classList.add('hidden')


        if (slidesRef <= slidesPerPage) {
            nextButRef.current.classList.add('hidden')
            for (const slide of sliderRef.current.childNodes)
                slide.style.width = '20vw'
        }
        else {
            nextButRef.current.classList.remove('hidden')
        }
    }, [slidesPerPage, sliderRef, props.images.length])

    useEffect(() => {
        // Update the visible slides whenever the currentSlide changes
        const endIndex = (currentSlide + 1) * slidesPerPage;
        const startIndex = endIndex - slidesPerPage;
        setVisibleSlides(props.images.slice(startIndex, endIndex));

        if (currentSlide === 0) {
            if (sliderRef.current.childNodes.length >= (slidesPerPage + 1)) {
                sliderRef.current.childNodes[slidesPerPage].style.opacity = '0.2'
            }
        }
    }, [currentSlide, props.images, slidesPerPage]);

    // Function to slide to the next slide
    function slideNext() {
        console.log(currentSlide)
        prevButRef.current.classList.remove('hidden')
        console.log(slidePage)

        if (currentSlide < slidePage - 1) {
            setCurrentSlide((currentSlide + 1) % slidePage)
            let currentSlideIndex = (currentSlide + 1) % slidePage
            updateSliderPosition(currentSlideIndex)

            if (currentSlideIndex === slidePage - 1) {
                nextButRef.current.classList.add('hidden')
                if (oddItems !== 0) {
                    updateSliderPositionOdd(oddItems, currentSlideIndex)
                }
            }
        }
        else if (currentSlide === slidePage) {
            return;
        }
    }

    // Function to slide to the previous slide
    function slidePrev() {
        if (currentSlide !== 0) {
            setCurrentSlide((currentSlide - 1 + slidePage) % slidePage)
            let currentSlideIndex = (currentSlide - 1 + slidePage) % slidePage;
            nextButRef.current.classList.remove('hidden')
            updateSliderPosition(currentSlideIndex)

            if (currentSlideIndex === 0) {
                updateSliderPosition(currentSlideIndex)
                prevButRef.current.classList.add('hidden')
            }
        }
        else {
            return;
        }
    }

    // Function to update the position of the slider based on the current slide index
    function updateSliderPosition(currentIndex) {
        // Calculate the index range of the visible slides
        const endIndex = (currentIndex + 1) * slidesPerPage;
        const startIndex = endIndex - slidesPerPage;

        // Calculate the index range of all slides
        const totalSlides = props.images.length;
        const totalEndIndex = (totalSlides < slidesPerPage ? totalSlides : totalSlides - slidesPerPage) + slidesPerPage;
        const totalStartIndex = totalEndIndex - slidesPerPage;


        // Apply transparency to the non-visible slides
        const newVisibleSlides = [];
        // Check if we are at the last slide (index 2) and update opacity accordingly
        const isLastSlide = currentIndex === slidePage - 1;
        if (isLastSlide && oddItems !== 0) {
            for (let i = 1; i <= oddItems; i++) {
                let slideRef = sliderRef.current.childNodes[totalSlides - i]
                slideRef.style.opacity = "1"
            }
            sliderRef.current.childNodes[totalSlides - (slidesPerPage + 1)].style.opacity = '0.2'
        }
        else {
            for (let i = 0; i < totalSlides; i++) {
                const isVisibleSlide = i >= startIndex && i < endIndex;
                const slideRef = sliderRef.current.childNodes[i];

                if (slideRef) {
                    if (isVisibleSlide) {
                        slideRef.style.opacity = '1';
                        newVisibleSlides.push(i);
                    } else {
                        slideRef.style.opacity = '0.2'; // Adjust the opacity value as needed
                    }
                }


            }
        }

        setVisibleSlides(newVisibleSlides);
        let translateX;
        if (slidesPerPage === 4) {
            translateX = -currentIndex * 80;
        }
        else if (slidesPerPage === 3) {
            translateX = -currentIndex * 90;
        }
        else if (slidesPerPage === 2) {
            translateX = -currentIndex * 90;
        }

        sliderRef.current.style.transform = `translateX(${translateX}vw)`;
    }

    function updateSliderPositionOdd(odd, currentIndex) {
        let translateX;
        if (slidesPerPage === 4) {
            translateX = -currentIndex * 80 + ((slidesPerPage - odd) * 20);
        }
        else if (slidesPerPage === 3) {
            translateX = -currentIndex * 90 + ((slidesPerPage - odd) * 30);
        }
        else if (slidesPerPage === 2) {
            translateX = -currentIndex * 90 + ((slidesPerPage - odd) * 45);
        }
        sliderRef.current.style.transform = `translateX(${translateX}vw)`;
    }

    return (
        <>
            <div className="sections">
                <div className="header-container">
                    <h2>{props.featureName}</h2>
                    <span className={(props.images.length > slidesPerPage) ? "" : "hidden"}>See all</span>
                </div>

                <div className="slider-container">
                    <div className="cards-items slider" ref={sliderRef}>
                        {props.images.map((item) => Slide(item))}
                    </div>

                </div>
                <div className="buttons">
                    <button ref={prevButRef} onClick={slidePrev} className="prev-btn"><img src={back} alt="Back" /></button>
                    <button ref={nextButRef} onClick={slideNext} className="next-btn"><img src={next} alt="Next" /></button>
                </div>
            </div>

            {props.additionalContent ?
                <div className="additional-content">
                    <h2>Got a GiftCards</h2>
                    <div>
                        <p>Earns 2★ per $1</p>
                        <button className="button button-dark-outline">Add or Reload</button>
                        <button className="button button-dark">Check balance</button>
                    </div>
                    <div className="terms-conditions">
                        <p>Card Terms & Conditions <img src={externalLink} alt="Link to:" /></p>
                    </div>

                </div>

                : null}
        </>
    )
}

export default Slides