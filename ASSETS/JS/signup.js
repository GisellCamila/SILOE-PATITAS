
//#region JS PARA REGISTRAR USUARIOS Y GUARDARLOS EN EL LOCAL STORAGE, TAMBIEN PARA COMPROBAR QUE NO EXISTA OTRO USUARIO CON EL MISMO CORREO
const signupform = document.querySelector('#signup__form')
signupform.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    const email = document.querySelector('#email').value
    // Falta obtener el valor del input para seleccionar el genero

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isEmailRegistered = Users.find(user => user.email === email)
    if(isEmailRegistered){
        return alert('Ya existe un usuario con este correo!')
    }

    Users.push({username: username, password: password, email: email})
    // Falta recibir el valor del input degenero y guardarlo en el local storege junto con los otros datos del usuario
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro exitoso!!')
    window.location.href = '../VIEWS/login.html'
})

//#endregion
