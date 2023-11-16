
//#region JS PARA ACCEDER A LA PAGINA DE ADMIN POR MEDIO DEL LOGIN
const hasUser = JSON.parse(localStorage.getItem('HAS_USER'))
const logoutButton = document.getElementById('logout-button')

if (!hasUser) {
    window.location = '../../index.html'
}

if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('HAS_USER')
    })
}
//#endregion

//#region JS PARA CREAR PRODUCTOS


//#endregion 