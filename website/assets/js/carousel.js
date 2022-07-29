const carousel = document.querySelectorAll(".projetos-portfolio__item");
const nextButtom = document.querySelector(".next");
const prevButtom = document.querySelector(".prev");

let = currentCarouselIndex = 0 

nextButtom.addEventListener("click", () =>{
    if(currentCarouselIndex === carousel.length - 1) {
        currentCarouselIndex = 0
    }else {
        currentCarouselIndex++
    }
    carousel.forEach(slides => {
        slides.classList.remove('projetos-portfolio__item--visible')
    })

    carousel[currentCarouselIndex].classList.add('projetos-portfolio__item--visible')
})

prevButtom.addEventListener("click", ()=> {
    if(currentCarouselIndex === 0) {
        currentCarouselIndex = carousel.length - 1
    }else {
        currentCarouselIndex--
    }

    carousel.forEach( slides => {
        slides.classList.remove('projetos-portfolio__item--visible')
    })

    carousel[currentCarouselIndex].classList.add('projetos-portfolio__item--visible')
})