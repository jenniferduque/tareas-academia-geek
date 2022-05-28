//Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. Considere que el cobro es con base en las horas que lo disponen y que las fracciones de 
//hora se toman como completas. Realizar el algoritmo que permita determinar el cobro.

//estacionamiento

let cobro = "1500";
const tarifa = "1500";
console.log("tarifa");

//uso de horas clientes 
let horas_de_uso = Math.ceil(Number(prompt("horas de estacionamiento")));
console.log ("valor total a pagar: " + (tarifa*horas_de_uso));


