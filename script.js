/*El usuario debe ingresar la URL de cada una de las imágenes, así
como el nombre de la ciudad y del país.
● El archivo html, solo debe tener el contenedor de la información, lo
demás se debe crear e insertar mediante el JS.
● Se debe hacer uso de ciclos repetitivos para la solicitud de los
datos necesarios.
● Se debe hacer uso del método appendChild para la inserción de los
elementos dentro del DOM.*/


const container = document.getElementById('main-content'); // Capturamos el elemento con el id container

for (let i = 0; i < 2; i++) {

//imput entradas del usuario
const imagenUrl = prompt("Por favor ingresa una URL con la imagen:"); // capturamos la imagen de 
const nombrecuidad = prompt("Por favor ingresa nombre de la cuidad:"); 
const nombreDePais = prompt("Por favor ingresa  el nombre del pais:"); 

// etiquetas
let div = document.createElement("div")
div.className = "card"

const textoCiudad = document.createElement("p"); // siempre el segundo en mayuscula de la palabra "textoCiudad"
textoCiudad.classList.add("textoCiudad");
const textoPais = document.createElement("p");
textoPais.classList.add("textoPais");

// valor del texto
textoCiudad.innerText = nombrecuidad;
textoPais.innerText = nombreDePais;

const img = document.createElement("img");
img.setAttribute("src", imagenUrl);

// hijos del div
div.appendChild (img);
div.appendChild (textoCiudad);
div.appendChild (textoPais);

container.appendChild (div);

    
}



