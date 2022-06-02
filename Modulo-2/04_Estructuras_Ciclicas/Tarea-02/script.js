//Suponga que tiene un conjunto de calificaciones de un grupo de 40 estudiantes, 
//realizar un algoritmo para calcular la calificación
// promedio (media) y la calificación más baja de todo el grupo.


let 
let suma = 0;
let notaMaxima = 4;

(function main(){
    let cantidadEstudiantes = parseInt(prompt("Ingrese el numero de estudiantes"));
    for ( let i = 1; i <= cantidadEstudiantes; i++) {
        let pedirNota = parseFloat(prompt(`Ingrese la nota del estudiante ${i}`));
        suma = suma + pedirNota;
        if  ( pedirNota <= 5 ) {
            notaMaxima = pedirNota;
        }
    }
    console.log(suma/cantidadEstudiantes);
    console.log(notaMaxima);
})();
