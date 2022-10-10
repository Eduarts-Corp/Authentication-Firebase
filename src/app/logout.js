// 4. Traigo del main la funcion del logout y la pego aca y en cambio de onAuth.... le ´pongo singOut que cierra la sesion. la llamo en el addEventlistener pero para poder ejecutarlo el espera el parametro de la autenticacion  que esta en firebase.js por ello nos toca importarlo.
import{ auth } from './firebase.js'
import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// 1. Lo primero sera identificarl el elemento del html que tiene el id logout
const logout = document.querySelector("#logout");
// console.log(logout)

// 2. Ponemos la escucha
logout.addEventListener("click",async() => {
    await signOut(auth)
    console.log('user singed out')
});

// 3. Como nadie lo esta requiriendo debo llamarlo desde el main.js
