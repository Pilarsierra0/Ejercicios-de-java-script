/*
1 - Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


2 - Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

- La fórmula del perímetro  es p = 2*(a +b)

3 - Números mágicos
Declara una función que genere un número aleatorio entre 1 y 10, luego solicite al usuario que 
ingrese un número en ese rango e indique si el número ingresado coincide con el aleatorio. Si es así gana el juego, 
sino pierde, se debe mostrar mensaje en consola.

*/


//1

function cadenaIngresada() {
    let cadenaTexto = prompt("ingrese una cadena de texto")
    console.log(cadenaTexto)
    if (cadenaTexto === cadenaTexto.toUpperCase()) {
        console.log("la cadena de texto ingresada esta formada por mayusculas");
    }else if(cadenaTexto === cadenaTexto.toLowerCase()){
        console.log("la cadena de texto ingresada esta formada por minusculas")
    }else{
        console.log("la cadena de texto ingresada esta formada por mayusculas y minusculas")
    }
}
cadenaIngresada()



//2
function perimetroRectangulo() {
    let lado1 = parseFloat(prompt("Ingrese el valor del primer lado del Rectangulo"))
    let lado2 = parseFloat(prompt("Ingrese el valor del segundo lado del Rectangulo"))
    console.log(`Primer lado: ${lado1}, Segundo lado: ${lado2}`)

    if (isNaN (lado1) || isNaN(lado2)) {
        console.log("Ingrese valor numero valido")
        
    }else{
        let perimetro = 2 * (lado1 + lado2)
        console.log(`El perimetro del Rectangulo es: ${perimetro}`)
    }
    
}
perimetroRectangulo()


//3
