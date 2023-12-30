
let openOverlay = document.querySelector('.clinic__register')
let overlay = document.querySelector('.overlay')
let closeOverlay = document.querySelector('.close')

openOverlay.addEventListener('click', () => {
    overlay.style.display = 'flex'
})

closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none'
})

overlay.addEventListener('click', (e) => {
    if (e.target.className === 'overlay') overlay.style.display = 'none'
})