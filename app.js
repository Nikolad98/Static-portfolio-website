const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar')
const navbarButtons = document.querySelectorAll('.navbar ul li a')

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('hidden')
    navbarButtons.forEach(button => {
        button.addEventListener('click', () => {
            navbar.classList.add('hidden')
        })
    })
})