//Ejercicios de String y Números
/*
1 - Crea una variable con tu nombre, otra con tu apellido y
 concaténalas con el mensaje de bienvenida: 'Bienvenido al evento' usando template string.
2 - Usando métodos de String quita los espacios de adelante y de atrás del siguiente 
texto: '              Había una vez un pequeño programador junior       '
3 - Convierte a mayúsculas tu nombre y apellido usando las variables definidas en el punto 1
4 - Crea un programita que le pida al
 usuario que ingrese un texto, convierte dicho texto en mayúsculas
  y muestra en consola cuantos caracteres tiene el texto recibido usando propiedades de los String.
5 - Crea un programa que solicite al usuario 
ingresar un número con 5 decimales, 
almacenar dicho número en una variable asegurándose que sea de tipo number. 
Mostrar en consola lo siguiente:
 - El número redondeado a su mayor valor
 - El número redondeado a su menor valor
 - El número original multiplicado por 3
 - El resto del número dividido por 2
 
                 `` comillas
*/



//1
let nombre = "Pilar"
let apellido = "Sierra"
console.log (`${nombre}  ${apellido}`)

//2
let texto = '              Había una vez un pequeño programador junior       '
console.log(texto.trim())
//otra forma de hacerlo
//let quitarEspacio = texto.trim()
//console.log(quitarEspacio)

//3
console.log(nombre.toUpperCase())
console.log(apellido.toUpperCase())

//4
let textoUsuario = prompt("ingrese un texto")
let textoUsuarioMayuscula = textoUsuario
console.log(textoUsuarioMayuscula.toUpperCase())
console.log( `Cantidad de Letras: ${textoUsuarioMayuscula.length}`)

//5

let numeroUsuario = prompt("Usuario ingrese un numero con 5 decimales")
let numeroDecimal = numeroUsuario
 
console.log(Math.floor(numeroDecimal))
console.log(Math.ceil (numeroDecimal))
console.log(`Nuemro Multiplicado por 3 = ${numeroDecimal * 3}`)
console.log(`Resto del resultado dividio en 2 es = ${numeroDecimal % 2}`)




