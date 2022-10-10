// Este archivo lo que va a tratar es de saber si ya existe un usuario o no para poder salir de la app.
//  Creamos esta funcion y con esta le decimos que si el usuario que me estan pasando existe voy a estar colocando los li del html de signin y signOut se ocultaran y solo me deja el logout pero si no existe el logout se va a ocultar. Pero lo primero es saber donde estan esos 2 datos  asi:
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

export const loginCheck = (user) => {
    if (user) {
        loggedOutLinks.forEach(link => link.style.display = 'none')
        loggedInLinks.forEach((link) => (link.style.display = "block"));

    } else {
        loggedOutLinks.forEach(link => link.style.display = 'block')
        loggedInLinks.forEach((link) => (link.style.display = "none"));

    }
}