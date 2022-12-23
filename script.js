//Ищем HTML коллекцию и преобразуем в массив
const slider = document.querySelector('#img')
const sliderItems = Array.from(slider.children)

const dots = document.querySelector('.dots-area')
const dotsItems = Array.from(dots.children)

const links = document.querySelector('.links')
const linksItem = Array.from(links.children)

const desc = document.querySelector('.desc-text')
const descItems = Array.from(desc.children)

const desc2 = document.querySelector('.desc-text-2')
const desc2Items = Array.from(desc2.children)

const desc3 = document.querySelector('.desc-text-3')
const desc3Items = Array.from(desc3.children)

// Пишем функции с набором параметров для каждого слайда

let slideF = function() {
    if (sliderItems[0]) {        
        dotsItems[0].classList.add('active-dot')
        sliderItems[0].classList.remove('img__item')
        sliderItems[0].classList.add('active')
        dotsItems[2].classList.remove('active-dot')
        sliderItems[2].classList.add('img__item')
        sliderItems[2].classList.remove('active')
        dotsItems[1].classList.remove('active-dot')
        sliderItems[1].classList.add('img__item')
        sliderItems[1].classList.remove('active')
        linksItem[0].classList.add('active-link')
        linksItem[1].classList.remove('active-link')
        linksItem[2].classList.remove('active-link')
        descItems[0].classList.add('active')
        desc2Items[0].classList.add('active')
        desc3Items[0].classList.add('active')
        descItems[1].classList.remove('active')
        desc2Items[1].classList.remove('active')
        desc3Items[1].classList.remove('active')
        descItems[2].classList.remove('active')
        desc2Items[2].classList.remove('active')
        desc3Items[2].classList.remove('active')
        
    }
}
slideF()

let slideS = function() {
    if (sliderItems[1]) {        
        dotsItems[1].classList.add('active-dot')
        sliderItems[1].classList.remove('img__item')
        sliderItems[1].classList.add('active')
        dotsItems[0].classList.remove('active-dot')
        sliderItems[0].classList.add('img__item')
        sliderItems[0].classList.remove('active')
        dotsItems[2].classList.remove('active-dot')
        sliderItems[2].classList.add('img__item')
        sliderItems[2].classList.remove('active')
        linksItem[0].classList.remove('active-link')
        linksItem[1].classList.add('active-link')
        linksItem[2].classList.remove('active-link')
        descItems[0].classList.remove('active')
        desc2Items[0].classList.remove('active')
        desc3Items[0].classList.remove('active')
        descItems[1].classList.add('active')
        desc2Items[1].classList.add('active')
        desc3Items[1].classList.add('active')
        descItems[2].classList.remove('active')
        desc2Items[2].classList.remove('active')
        desc3Items[2].classList.remove('active')
    }
}


let slideT = function() {
    if (sliderItems[2]) {        
        dotsItems[2].classList.add('active-dot')
        sliderItems[2].classList.remove('img__item')
        sliderItems[2].classList.add('active')
        dotsItems[1].classList.remove('active-dot')
        sliderItems[1].classList.add('img__item')
        sliderItems[1].classList.remove('active')
        dotsItems[0].classList.remove('active-dot')
        sliderItems[0].classList.add('img__item')
        sliderItems[0].classList.remove('active')
        linksItem[0].classList.remove('active-link')
        linksItem[1].classList.remove('active-link')
        linksItem[2].classList.add('active-link')
        descItems[0].classList.remove('active')
        desc2Items[0].classList.remove('active')
        desc3Items[0].classList.remove('active')
        descItems[1].classList.remove('active')
        desc2Items[1].classList.remove('active')
        desc3Items[1].classList.remove('active')
        descItems[2].classList.add('active')
        desc2Items[2].classList.add('active')
        desc3Items[2].classList.add('active')
    }
}    

// Пишем функции для стрелок

let flag = 1

let moveSliderNext = function() {
    if (flag == 1) {
        slideF()
        flag = 2
    } else if (flag == 2) {
        slideS()
        flag = 3
    } else if (flag == 3) {
        slideT()
        flag = 1
    }
}

let moveSliderPrev = function() {
    if (flag == 1) {
        slideF()
        flag = 3
    } else if (flag == 3) {
        slideT()
        flag = 2
    } else if (flag == 2) {
        slideS()
        flag = 1
    }
}

let autoPlay = function() {
    setTimeout(slideS, 3000)
    setTimeout(slideT, 6000)
    setTimeout(slideF, 9000)
    let repeat = setTimeout(autoPlay, 9000)
}  

autoPlay()
