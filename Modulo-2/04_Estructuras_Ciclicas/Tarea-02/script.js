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
