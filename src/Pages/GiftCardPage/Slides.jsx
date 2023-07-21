import Slide from "./Slide"
import { useState, useEffect, useRef } from "react"
import next from "./right-arrow.png"
import back from "./left-arrow.png"

function Slides(props) {
    const sliderRef = useRef(null)
    const nextButRef = useRef(null)
    const prevButRef = useRef(null)

    const [currentSlide, setCurrentSlide] = useState(0)
    const [slidePage, setSlidePage] = useState(0)
    const [oddItems, setOddItems] = useState(0)
    const [totalWidth, setTotalWidth] = useState(0)
    const [visibleSlides, setVisibleSlides] = useState([])

    useEffect(() => {
        const slidesRef = props.images.length
        setTotalWidth(slidesRef * 20)
        setSlidePage(Math.ceil(slidesRef / 4))
        setOddItems(slidesRef % 4)
        prevButRef.current.classList.add('hidden')


        if (slidesRef <= 4) {
            nextButRef.current.classList.add('hidden')
            for (const slide of sliderRef.current.childNodes)
                slide.style.width = '20vw'
        }
    }, [sliderRef, props.images.length])

    useEffect(() => {
        // Update the visible slides whenever the currentSlide changes
        const endIndex = (currentSlide + 1) * 4;
        const startIndex = endIndex - 4;
        setVisibleSlides(props.images.slice(startIndex, endIndex));

        if (currentSlide === 0) {
            if (sliderRef.current.childNodes.length >= 5) {
                sliderRef.current.childNodes[4].style.opacity = '0.2'
            }
        }
    }, [currentSlide, props.images]);

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
        const endIndex = (currentIndex + 1) * 4;
        const startIndex = endIndex - 4;

        // Calculate the index range of all slides
        const totalSlides = props.images.length;
        const totalEndIndex = (totalSlides < 4 ? totalSlides : totalSlides - 4) + 4;
        const totalStartIndex = totalEndIndex - 4;


        // Apply transparency to the non-visible slides
        const newVisibleSlides = [];
        // Check if we are at the last slide (index 2) and update opacity accordingly
        const isLastSlide = currentIndex === slidePage - 1;
        if (isLastSlide && oddItems !== 0) {
            for (let i = 1; i <= oddItems; i++) {
                let slideRef = sliderRef.current.childNodes[totalSlides - i]
                slideRef.style.opacity = "1"
            }
            sliderRef.current.childNodes[totalSlides - 5].style.opacity = '0.2'
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

        const translateX = -currentIndex * 80;
        sliderRef.current.style.transform = `translateX(${translateX}vw)`;
    }

    function updateSliderPositionOdd(odd, currentIndex) {
        const translateX = -currentIndex * 80 + ((4 - odd) * 20);
        sliderRef.current.style.transform = `translateX(${translateX}vw)`;
    }

    return (
        <div className="sections">
            <h2>{props.featureName}</h2>
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
    )
}

export default Slides