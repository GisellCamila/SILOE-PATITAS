const formLogin = document.getElementById('login-form')

if (formLogin) {
  formLogin.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = event.target.elements.username.value
    const password = event.target.elements.password.value

    // Username: Gisell; password: admin12345 //

    if (username === 'Gisell' && password === 'admin12345') {
      localStorage.setItem('HAS_USER', 'true')
      window.location = '../VIEWS/admin.html'
      location = '../VIEWS/admin.html'
    }
  })
}