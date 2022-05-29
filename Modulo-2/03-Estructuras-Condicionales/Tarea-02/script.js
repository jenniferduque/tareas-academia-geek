//   Una persona enferma, que pesa 70kg, se encuentra en reposo 
//   y desea saber cuántas calorías consume su cuerpo durante todo el tiempo
//   que realice una misma actividad. 
//   Las actividades que tiene permitido realizar son únicamente dormir 
//   y estar sentado en reposo.
//   Los datos que tiene son que estando dormido consume 1.08 calorías por minuto
//    y estando sentado en reposo consume 1.66 calorías por minuto.

//condicionales multiples


let n = Number;
let calorias;
console.log(calorias);
console.log (" Elige una opcion ");

let opcion = prompt("opcion 1 o 2");
let tiempo = prompt("Cuantos minutos dura la actividad")

if (n){
    if ((opcion == 1) || ( opcion==2))
    console.log(opcion);
    console.log (" escribe el tiempo en minutos dedicado a la actividad");
}
   
if (tiempo)
    if ( opcion ==1 ){
    calorias = tiempo * 1.08
    console.log(calorias);

}else if( opcion == 2){
    calorias = tiempo * 1.66
    console.log(calorias);

}
