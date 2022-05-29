//Un obrero necesita calcular su salario semanal, 
//el cual se obtiene de la siguiente manera:

    //Si trabaja 40 horas o menos se le paga $16 por hora
    //Si trabaja más de 40 horas se le paga $16 por cada una de las primeras 40 horas 
    //y $20 por cada hora extra.

    //variables
     
const VALOR_HORA = 16;
const VALOR_HORA_EXTRA= 20;
const pago = 40;
console.log ("escribir las horas trabajas");
let horas;


if ( horas > 40 ) {
 //entonces 
   VALOR_HORA_EXTRA = horas - 40
   pago = (40 * 16) + (VALOR_HORA_EXTRA * 20);

//algo falso
}else { 
  
  console.log ("confirmar");
  
}

console.log ("pago semanal por las", horas,"horas trabajadas es: $ " , pago);







