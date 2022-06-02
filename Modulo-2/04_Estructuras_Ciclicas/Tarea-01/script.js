//Leer 15 números negativos y convertirlos a positivos e imprimir dichos números./*

let datos = parseInt(prompt("Ingrese cuantos numeros negativos va a ingresar"));
const factorMultiplo = -1;

(function main(){
    for ( let i = 1; i <= datos; i++) {
        let numeros = parseInt(prompt(`Ingrese el numero negativo ${i}`));
        let numeroPositivo = numeros*factorMultiplo;
        console.log(numeroPositivo);
    }
})();









