/*En una tienda de venta de repuestos automotrices se tiene que el descuento depende del monto de venta total.
Se ingresa el monto de venta y el sistema debe calcular el descuento y restarlo del total segun las reglas:
- Si el monto es menor que 500 no hay descuento
- Si el monto está comprendido entre 500 y 1000 inclusive, el descuento es de 5%
- Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
- Si el monto está comprendido entre 7000 y 15000 inclusive, el descuento es del 18%
- Si el monto es mayor de 15000 el desc es del 25%.
por ejemplo si se ingresa un monto de 5000 el descuento sera 550, y por tanto el valor a pagar sera 4450.*/


let montoVenta = Number(prompt = "ingrese el Monto de Venta");
if(montoVenta < 500){
    console.log("no hay descuento")
   
}else if (montoVenta <=1000) {
    console.log(montoVenta * 5)
}