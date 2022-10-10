import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage} from './showMessage.js';


const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async(e) => {
  e.preventDefault();

  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;
  
  try {
        const credentials = await signInWithEmailAndPassword(auth, email, password) 
      console.log(credentials);
      
    //   Esto es lo mismo del modal del que esta en el signupForm.js
      const modal = bootstrap.Modal.getInstance(document.querySelector("#SingInModal"));
      modal.hide()  

       showMessage('Welcome'+ credentials.user.email)     

        
    } catch(error) {
      if (error.code === "auth/wrong-password") {
          showMessage('Error en la contraseña','error')
      } else if (error.code === "auth/user-not-found") {
          showMessage("Usuario No Registrado", 'error')          
      } else {
          showMessage(error.message, 'error')
      }
    }

});

  
