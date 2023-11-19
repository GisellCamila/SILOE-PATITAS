const header = document.getElementById('header')
const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')
const navMenu = document.getElementById('nav-menu')

//#region Menu responsive
if (menuOpen) {
  menuOpen.addEventListener('click', () => {
    navMenu.classList.add('header__nav--visible')
  })
}
if (menuClose) {
  menuClose.addEventListener('click', () => {
    navMenu.classList.remove('header__nav--visible')
  })
}

//#endregion

//#region
// const user = JSON.parse(localStorage.getItem('login_success')) || false
// if(!user){
//   window.location.href = '../VIEWS/login.html'
// } 
//#endregion

