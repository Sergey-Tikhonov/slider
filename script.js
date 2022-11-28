const slider = document.querySelector('#img')
const sliderItems = Array.from(slider.children)
const btnNext = document.querySelector('#btnNext')
const btnPrev = document.querySelector('#btnPrev')

//Клик по картинке

sliderItems.forEach(function (slide, index) {
      
    if (index !==0) {
        slide.classList.add('hidden')
    }

    slide.dataset.index = index

    sliderItems[0].setAttribute('data-active', '')

    slide.addEventListener('click', function () {

        slide.classList.add('hidden')
        slide.removeAttribute('data-active')

        let nextSlideIndex

        if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0
        } else {
            nextSlideIndex = index + 1
        }

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
        
        nextSlide.classList.remove('hidden')
        nextSlide.setAttribute('data-active', '')

    })
})

//Клик по кнопке вперед

btnNext.onclick = function () {

    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    let nextSlideIndex

        if (currentSlideIndex + 1 === sliderItems.length) {
            nextSlideIndex = 0
        } else {
            nextSlideIndex = currentSlideIndex + 1
        }
    
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')

}

//Клик по кнопке назад

btnPrev.onclick = function () {

    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    let nextSlideIndex

        if (currentSlideIndex === 0 ) {
            nextSlideIndex = sliderItems.length - 1
        } else {
            nextSlideIndex = currentSlideIndex - 1
        }
    
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')

}