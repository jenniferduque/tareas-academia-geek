/*El usuario debe ingresar la URL de cada una de las imágenes, así
como el nombre de la ciudad y del país.
● El archivo html, solo debe tener el contenedor de la información, lo
demás se debe crear e insertar mediante el JS.
● Se debe hacer uso de ciclos repetitivos para la solicitud de los
datos necesarios.
● Se debe hacer uso del método appendChild para la inserción de los
elementos dentro del DOM.*/


const container = document.getElementById('main-content'); // Capturamos el elemento con el id container


for (let i = 0; i < 12; i++) {

//imput entradas del usuario
const imagenUrl = prompt("Por favor ingresa una URL con la imagen:"); // capturamos la imagen de 
const nombrecuidad = prompt("Por favor ingresa nombre de la cuidad:"); 
const nombreDePais = prompt("Por favor ingresa  el nombre del pais:"); 

// etiquetas
let div =document.createElement("div")
div.className = "card"
const textoCuidad = document.createElement("p"); // siempre el segundo en mayuscula de la palabra "textoCuidad"
const textoPais = document.createElement("p");

// valor del texto
textoCuidad.innerText = nombrecuidad;
textoPais.innerText = nombreDePais;

const img = document.createElement("img");
img.setAttribute("src", imagenUrl);

// hijos del div
div.appendChild (img);
div.appendChild (textoCuidad);
div.appendChild (textoPais);

container.appendChild (div);

    
}



