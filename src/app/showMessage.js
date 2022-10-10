


 // Traemos todo este codigo de toastify pero lo ponemos dentro de una funcion para poder reutilizar el code.
// Le mandare como parametros message para que diga algo de acuerdo si es exitoso o erroneo igual un tipo para 
// que cambie de color de ser necesario


 export function showMessage(message,type='success'){
    Toastify({
      text: message, // Aqui es donde estare pniendo el mensaje que requiera
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: type === "success" ? " green": "red", // Mediante operador  ternario condicionamos para que cambie de colores 
      },
      onClick: function () {}, // Callback after click
    }).showToast();

}