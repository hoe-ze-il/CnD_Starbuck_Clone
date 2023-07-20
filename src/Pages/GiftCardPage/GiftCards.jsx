import "./GiftCards.scss"
import { useState, useEffect, useRef } from "react"

function GiftCards() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const sliderRef = useRef(null)
  const slidesRef = useRef([])
  const nextButRef = useRef(null)
  const prevButRef = useRef(null)


  const slider = sliderRef.current;
  // console.log(slider)
  const nextBut = nextButRef.current;
  const prevBut = prevButRef.current;
  // console.log(slidesRef)
  // console.log(slidesRef.current.length)
  const totalWidth = slidesRef.current.length * 25;
  slider.style.width = `${totalWidth}vw`;

  console.log(totalWidth)

  const oddItems = slidesRef.current.length % 4
  //console.log(oddItems)

  // Variable to keep track of the current slide index
  console.log(currentSlide)
  //prevBut.classList.add('hidden')


  console.log(slider)


  function slideNext() {
    const slidePage = Math.ceil(slidesRef.current.length / 4)
    //console.log(currentSlide)
    console.log(slidePage)
    // prevBut.classList.remove('hidden')
    if (currentSlide < slidePage - 1) {
      setCurrentSlide((currentSlide + 1) % slidePage)
      console.log(currentSlide)
      updateSliderPosition()

      if (currentSlide === slidePage - 1) {
        // nextBut.classList.add('hidden')
        if (oddItems !== 0) {
          updateSliderPositionOdd(oddItems)
        }
      }
    }
    else if (currentSlide === slidePage) {
      return;
    }

  }


  // Function to slide to the previous slide
  function slidePrev(prevBut, nextBut) {
    if (currentSlide !== 0) {
      setCurrentSlide((currentSlide - 1 + slidePage) % slidePage)
      // nextBut.classList.remove('hidden')
      updateSliderPosition()
    }
    if (currentSlide === 0) {
      updateSliderPosition()
      // prevBut.classList.add('hidden')
    }
    else {
      return;
    }
    console.log(currentSlide)
  }

  // Function to update the position of the slider based on the current slide index
  function updateSliderPosition() {
    const translateX = - currentSlide * 100;
    console.log(translateX)
    sliderRef.current.style.transform = `translateX(${translateX}vw)`;
  }

  function updateSlide1Step(odd) {
    const translateX = -odd * 25
    slider.style.transform = `translateX(${translateX}vw)`;
  }

  function updateSliderPositionOdd(odd) {
    const translateX = -currentSlide * 100 + ((4 - odd) * 25);
    slider.style.transform = `translateX(${translateX}vw)`;
  }



  return (
    <>
      <div className="feature" id="feature1">
        <h2>Hello</h2>
        <div className="slider-container">
          <div className="cards-items slider" ref={sliderRef}>
            <div className="slide" ref={el => (slidesRef.current[0] = el)}>
              <img
                src="images/gift-cards-img/feature-img-2.jpg"
                alt="Feature cards 2"
                className="cards-img"
              />
            </div>
            <div className="slide" ref={el => (slidesRef.current[1] = el)}>
              <img
                src="images/gift-cards-img/feature-img-3.jpg"
                alt="Feature cards 3"
                className="cards-img"
              />
            </div>
            <div className="slide" ref={el => (slidesRef.current[2] = el)}>
              <img
                src="images/gift-cards-img/feature-img-4.jpg"
                alt="Feature cards 4"
                className="cards-img"
              />
            </div>
            <div className="slide" ref={el => (slidesRef.current[3] = el)}>
              <img
                src="images/gift-cards-img/feature-img-6.jpg"
                alt="Feature cards 6"
                className="cards-img"
              />
            </div>
            <div className="slide" ref={el => (slidesRef.current[4] = el)}>
              <img
                src="images/gift-cards-img/feature-img-7.jpg"
                alt="Feature cards 7"
                className="cards-img"
              />
            </div>
          </div>
        </div>
        <div className="buttons 1">
          <button ref={prevButRef} onClick={slidePrev} className="prev-btn">Previous</button>
          <button ref={nextButRef} onClick={slideNext} className="next-btn">Next</button>
        </div>
      </div>
      <div className="feature">
        <h2>Hello</h2>
        <div className="slider-container">
          <div className="cards-items slider">
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-2.jpg"
                alt="Feature cards 2"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-3.jpg"
                alt="Feature cards 3"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-4.jpg"
                alt="Feature cards 4"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-6.jpg"
                alt="Feature cards 6"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-7.jpg"
                alt="Feature cards 7"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-8.jpg"
                alt="Feature cards 8"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-9.jpg"
                alt="Feature cards 9"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-9.jpg"
                alt="Feature cards 9"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-10.jpg"
                alt="Feature cards 10"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-11.jpg"
                alt="Feature cards 11"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-12.jpg"
                alt="Feature cards 12"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-13.jpg"
                alt="Feature cards 13"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-13.jpg"
                alt="Feature cards 13"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-15.jpg"
                alt="Feature cards 15"
                className="cards-img"
              />
            </div>
            <div className="slide">
              <img
                src="images/gift-cards-img/feature-img-16.jpg"
                alt="Feature cards 16"
                className="cards-img"
              />
            </div>
          </div>
        </div>
        <div className="buttons 2">
          <button className="prev-btn">Previous</button>
          <button className="next-btn">Next</button>
        </div>
      </div>
    </>

  )
}

export default GiftCards
