const sliderContainer = feature.querySelector('.slider-container');
const slider = sliderContainer.querySelector(".slider")
const slides = sliderContainer.querySelectorAll(".slide")
const nextBut = feature.querySelector('.next-btn')
const prevBut = feature.querySelector('.prev-btn')

// Calculate the total width of all slides
const totalWidth = slides.length * 25;
slider.style.width = `${totalWidth}vw`;
slidePage = Math.ceil(slides.length / 4)
console.log(totalWidth)
console.log(slidePage)
console.log(slides.length)

oddItems = slides.length % 4
console.log(oddItems)

// Variable to keep track of the current slide index
let currentSlide = 0;
prevBut.classList.add('hidden')


// Function to slide to the next slide
function slideNext() {
    console.log(currentSlide)
    prevBut.classList.remove('hidden')
    if (currentSlide < slidePage - 1) {
        currentSlide = (currentSlide + 1) % slidePage;
        updateSliderPosition()

        if (currentSlide === slidePage - 1) {
            nextBut.classList.add('hidden')
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
function slidePrev() {
    if (currentSlide !== 0) {
        currentSlide = ((currentSlide - 1 + slidePage) % slidePage);
        nextBut.classList.remove('hidden')
        updateSliderPosition()
    }
    if (currentSlide === 0) {
        updateSliderPosition()
        prevBut.classList.add('hidden')
    }
    else {
        return;
    }
    console.log(currentSlide)
}

// Function to update the position of the slider based on the current slide index
function updateSliderPosition() {
    const translateX = -currentSlide * 100;
    slider.style.transform = `translateX(${translateX}vw)`;
}

function updateSlide1Step(odd) {
    const translateX = -odd * 25
    slider.style.transform = `translateX(${translateX}vw)`;
}

function updateSliderPositionOdd(odd) {
    const translateX = -currentSlide * 100 + ((4 - odd) * 25);
    slider.style.transform = `translateX(${translateX}vw)`;
}

prevBut.addEventListener('click', slidePrev)
nextBut.addEventListener('click', slideNext)