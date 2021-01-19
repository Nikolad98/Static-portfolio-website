const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('.navbar')
const navbarButtons = document.querySelectorAll('.navbar ul li a')
const header = document.querySelector('header')

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('hidden')
    navbarButtons.forEach(button => {
        button.addEventListener('click', () => {
            navbar.classList.add('hidden')
        })
    })
})

document.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 350){
        header.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
    }else{
        header.style.backgroundColor = "transparent"
    }
})