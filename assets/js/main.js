const images = document.querySelectorAll('.images img')
const btnImages = document.querySelectorAll('.thumbs img')

btnImages[0].addEventListener('click', () => {
    images[0].classList.add('block')
    images[0].classList.remove('hidden')


    images[1].classList.remove('block')
    images[2].classList.remove('block')
    images[3].classList.remove('block')


    images[1].classList.add('hidden')
    images[2].classList.add('hidden')
    images[3].classList.add('hidden')

})

btnImages[1].addEventListener('click', () => {
    images[1].classList.add('block')
    images[1].classList.remove('hidden')

    images[0].classList.remove('block')
    images[2].classList.remove('block')
    images[3].classList.remove('block')

    images[0].classList.add('hidden')
    images[2].classList.add('hidden')
    images[3].classList.add('hidden')

})

btnImages[2].addEventListener('click', () => {
    images[2].classList.add('block')
    images[2].classList.remove('hidden')

    images[0].classList.remove('block')
    images[1].classList.remove('block')
    images[3].classList.remove('block')

    images[0].classList.add('hidden')
    images[1].classList.add('hidden')
    images[3].classList.add('hidden')

})

btnImages[3].addEventListener('click', () => {
    images[3].classList.add('block')
    images[3].classList.remove('hidden')

    images[0].classList.remove('block')
    images[1].classList.remove('block')
    images[2].classList.remove('block')

    images[0].classList.add('hidden')
    images[1].classList.add('hidden')
    images[2].classList.add('hidden')

})