import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const singupForm = document.querySelector("#singup-form");

singupForm.addEventListener("submit", async(e) => {
  e.preventDefault();

  const email = singupForm["singup-email"].value;
  const password = singupForm["singup-password"].value;

    console.log(email, password);

    try {
        
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials);


        // Como queda abierto despues del registro ahora quiero cerrar el modal de singUp y lo hago con bootstrap
        // 1. Selecciono el modal y lo pongo en una const
        const singupModal = document.querySelector("#SingUpModal");
        // 2. Vamos por medio de bootstrap a obtener la instancia de un modal ya creado  que es el signupmodal y lo guardo en una cosnt
        const modal = bootstrap.Modal.getInstance(singupModal)
        // 3. Una vez ya tengo este modal puedo activar metodos del mismo y ene ste caso vamos a act el hide que lo oculta finalmente 
        modal.hide();

        showMessage(`Bienvenido ${userCredentials.user.email}`)

        
    } catch (error) {
        
        console.log(error.message)
        console.log(error.code);

        // Manejo de errores al ingreso de datos
        
        if (error.code === 'auth/email-already-in-use') {
            showMessage("El email ya se encuentra en uso", "error")
        } else if (error.code === 'auth/invalid-email') {
            showMessage('Correo invalido', "error");
        } else if (error.code === "auth/weak-password") {
            showMessage("Contraseña invalida", "error");
        } else if (error.code) {
            showMessage('Algo salio mal 😥', "error")
        }
    }
            
          

    

});
