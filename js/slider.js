'use strict'

const nextSlideDiv = document.getElementById("next-slide")
const currentSlideDiv = document.getElementById("current-slide")

const slideImages = [
    'url(./images/slide1.jpg)', // 0
    'url(./images/slide2.jpg)', // 1
    'url(./images/slide3.jpg)', // 2
    'url(./images/slide4.jpg)', // 3
]

const slideDelay = 2400
const slideMove = 1200

let currentSlideIndex = 0

resetSlider()

function resetSlider() {
    nextSlideDiv.classList.remove('smooth')
    currentSlideDiv.classList.remove('smooth')

    currentSlideDiv.style.backgroundImage = slideImages[currentSlideIndex]
    currentSlideDiv.style.transform = 'translateX(0)'
    nextSlideDiv.style.transform = 'translateX(100%)'

    setTimeout( nextSlide, slideDelay )
}

function nextSlide() {
    nextSlideDiv.classList.add('smooth')
    currentSlideDiv.classList.add('smooth')
    
    currentSlideIndex++
    if (currentSlideIndex === slideImages.length) currentSlideIndex = 0

    nextSlideDiv.style.backgroundImage = slideImages[currentSlideIndex]
    nextSlideDiv.style.transform = 'translateX(0)'
    currentSlideDiv.style.transform = 'translateX(-100%)'

    setTimeout( resetSlider, slideMove )
}