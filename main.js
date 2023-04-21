window.addEventListener('load', (event) => {
    let preloader = document.querySelector('.preloader')
    setTimeout(() => {
        preloader.classList.add('transition-all')
        preloader.classList.add('duration-500')
        preloader.classList.add('invisible')
        preloader.classList.add('!opacity-0')
    }, 500)
});

// mobile menu
const openMenu = document.getElementById('open-menu')
const  openWrapper = document.getElementById('menu-wrapper')
const closeMenu = document.getElementById('close-menu')

openMenu.addEventListener('click',function (){
    openWrapper.classList.add('!opacity-100')
    openWrapper.classList.add('!visible')
})

closeMenu.addEventListener('click',function (){
    openWrapper.classList.remove('!opacity-100')
    openWrapper.classList.remove('!visible')
})
// mobile menu end