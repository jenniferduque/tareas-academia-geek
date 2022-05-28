//Un estudiante desea saber cual será su calificación final en la 
//materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:

//55% del promedio de sus tres calificaciones parciales
//30% de la calificación del examen final
//15% de la calificación de un trabajo final


// se descrimina cada calificacion

let c1 = 70;
let c2 = 90;
let c3 = 100;

// calificacion examen final
let examenF = 30;

//trabajo final
let trabajo_final = 10;

//promedio
let promedio= (c1+c2+c3) /3;

//porcentaje parcial
let pparcial = promedio*0.55;

//porentage de examen final
let pef = examenF *0.30;

//porcentaje trabajo final
let ptf = trabajo_final*0.15

//calificacion final
let calif = pparcial+pef+ptf

console.log ("calificacion final es: ", calif);


