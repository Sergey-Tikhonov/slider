const slider = document.querySelector('#img')
const sliderItems = Array.from(slider.children)

sliderItems.forEach(function (slide, index) {
    console.log(slide)
  
    if (index !==0) {
        slide.classList.add('hidden')
    }

    slide.dataset.index = index

    slide.addEventListener('click', function () {

        slide.classList.add('hidden')

        let nextSlideIndex

        if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0
        } else {
            nextSlideIndex = index + 1
        }
        
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
        nextSlide.classList.remove('hidden')

        console.log(nextSlideIndex)
    })
})