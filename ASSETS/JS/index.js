const header = document.getElementById('header')
const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')
const navMenu = document.getElementById('nav-menu')
const LogOutButton = document.getElementById('enter')

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

//#region Cambiar boton de inicio de sesion a "Cerrar sesion"
if (localStorage.getItem('login_success')) {
  LogOutButton.textContent ="Cerrar sesion";
}

if (LogOutButton) {
  addEventListener('click', () => {
    localStorage.removeItem('login_success');
  })
}


//#endregion

