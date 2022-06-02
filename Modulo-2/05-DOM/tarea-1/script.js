//Usted ha sido contratado por una importante empresa de pelicula sy requiere que 
//usted diselñe una sección donde se mostrarán las 10 películas más recientes. 
//Para poder cumplir con la entrega es necesario que se cumplan los siguientes requerimeintos:


//El administrador debe poder agregar las 10 imagenes a traves del propmt.
//Se debe pedir el nombre de la película y el poster(imagen) de la misma.
//Todas las imagenes deben tener el mismo tamaño y se debe mostrar de la siguiente forma imagen1
//El nombre de la pelicula se mostrará debajo del poster.
//Se debe usar el ciclo FOR.
//El contenido se insertará al DOM haciendo uso del método appendChild();


const peliculas = document.querySelector(".main-content");
contenedor.classList.add("pelicula");

for ( let i = 0;  i < 10; i++){
    let titulo = (prompt("ingresa el titulo de la pelicula:"));
    let imagen = (prompt("ingresa la imagen:"));
    const contenedor = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", imagen);
    contenedor.appendChild(img);
    const texto = document.createElement("p");
    texto.innerHTML = `${titulo}`;
    contenedor.appendChild(texto);
    peliculas.appendChild(contenedor);

}
