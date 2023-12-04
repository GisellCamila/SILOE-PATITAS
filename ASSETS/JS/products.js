const saludo = document.getElementById('content')
const login_success = localStorage.getItem('login_success')
let Genero = login_success.genero
const Mujer = login_success.Genero === "mujer"




if (Mujer) {
    saludo.innerHTML (`
            <h2 class="content__saludo">
             Bienvenida ${login_success.username}
            </h2>
            `)
} 
// function Saludo(genero) {
//     if (genero.value === "mujer") => {
//         saludo.innerHTML = saludo.map => (`

//         `)
        
        
        
//         => (`
//         <h2 class="content__saludo">
//          Bienvenida ${ValidUser.username}
//         </h2>
//         `)
//     }

// }

