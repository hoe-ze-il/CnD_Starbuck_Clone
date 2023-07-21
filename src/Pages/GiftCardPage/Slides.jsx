import Slide from "./Slide"
import { useState, useEffect, useRef } from "react"

function Slides(props) {
    const sliderRef = useRef(null)
    // const slidesRef = useRef([])
    const nextButRef = useRef(null)
    const prevButRef = useRef(null)

    console.log(sliderRef)
    console.log()
    console.log(nextButRef)
    console.log(nextButRef)

    const [currentSlide, setCurrentSlide] = useState(0)
    const [slidePage, setSlidePage] = useState(0)
    const [oddItems, setOddItems] = useState(0)
    const [totalWidth, setTotalWidth] = useState(0)

    useEffect(() => {
        const slidesRef = props.images.length
        setTotalWidth(slidesRef * 25)
        console.log(slidesRef)
        setSlidePage(Math.ceil(slidesRef / 4))
        setOddItems(slidesRef % 4)
        prevButRef.current.classList.add('hidden')
    }, [sliderRef])

    console.log(totalWidth)

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
        console.log(currentSlide)
    }


    // Function to update the position of the slider based on the current slide index
    function updateSliderPosition(currentIndex) {
        const translateX = -currentIndex * 100;
        sliderRef.current.style.transform = `translateX(${translateX}vw)`;
        console.log('In update function')
        console.log(currentSlide)
    }

    function updateSliderPositionOdd(odd, currentIndex) {
        const translateX = -currentIndex * 100 + ((4 - odd) * 25);
        sliderRef.current.style.transform = `translateX(${translateX}vw)`;
    }

    console.log(currentSlide)

    return (
        <>
            <h2>{props.featureName}</h2>
            <div className="slider-container">
                <div className="cards-items slider" ref={sliderRef}>
                    {props.images.map((item) => Slide(item))}
                </div>

            </div>
            <div className="buttons">
                <button ref={prevButRef} onClick={slidePrev} className="prev-btn">Previous</button>
                <button ref={nextButRef} onClick={slideNext} className="next-btn">Next</button>
            </div>
        </>
    )
}

export default Slides