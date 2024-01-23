const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle) {
navToggle.addEventListener('click', () =>{
navMenu.classList.add('show-menu')
})
}

/* Menu hidden */
if(navClose)
navClose.addEventListener('click', () =>{
navMenu.classList.remove('show-menu')
})

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

