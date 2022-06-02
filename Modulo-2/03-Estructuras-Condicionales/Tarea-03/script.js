//Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original
// y su precio con descuento. El descuento lo hace en base a la clave.
// Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento es del 20%
// (solo existen dos claves).

let producto = prompt("escribe el nombre de productor");
let clave = parseInt(prompt("seleccionar clave del producto: 1 0 2"));
let valor = parseInt(prompt("ingrese el valor del producto"));
let descuento = 0;

switch(clave){
        case 1:
            descuento = valor*0.1;
            console.log("el producto $", producto, "tiene un valor de:", valor ,"pero con la clave", clave , "a precio de:", valor-descuento);
        break;

        case 2:
            descuento = valor*0.2;
             console.log("el producto $", producto, "tiene un valor de:", valor ,"pero con la clave", clave , "a precio de:", valor-descuento);
        break;

        default :
          console.log("ingrese clave correcta");
        break;  

}













