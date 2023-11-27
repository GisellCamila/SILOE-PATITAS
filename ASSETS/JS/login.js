
//#region JS PARA ACCESO AL ADMIN
const formLogin = document.getElementById('login-form')

if (formLogin) {
  formLogin.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = event.target.elements.username.value
    const password = event.target.elements.password.value
    const email = event.target.elements.email.value

    // Username: Gisell; password: admin12345; email: gisellortiz871@gmail.com //


    if (username === 'Gisell' && password === 'admin12345' && email === 'gisellortiz871@gmail.com') {
      localStorage.setItem('HAS_USER', 'true')
      window.location.href = '../VIEWS/admin.html'
    }
  })
}
//#endregion

//#region INICIO DE SESION(INGRESO PARA USUARIOS YA REGISTRADOS)
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value
  const email = document.querySelector('#email').value
  const Users= JSON.parse(localStorage.getItem('users')) || []
  const validUser = Users.find(user => user.username === username && user.password === password && user.email === email)

  if(!validUser){
    return alert('Usuario y/o contraseña incorrectos!')
  }

// falta hacer saludo personalizado dependiendo el genero del usuario.-------------------
  alert(`Bienvenid@ ${validUser.username}`)
  localStorage.setItem('login_success', JSON.stringify(validUser))
  window.location.href = '../VIEWS/products.html'

})


//#endregion
