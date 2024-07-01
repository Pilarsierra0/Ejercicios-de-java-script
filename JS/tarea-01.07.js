//Ejercicio 1
/*
Crea tres arrays de 5 números cada uno, luego escribe una función declarativa que reciba los tres arrays como parámetros 
y realice las siguientes tareas:
- Unir los tres arrays en un nuevo array llamado 'integrados' 
- Ordenar el array de menor a mayor
- Crear un nuevo array que contenga todos los números del array 'integrados' que sean menores de 60.
*/

//Ejercicio 2
/*
Cotizadoción Dolar
Escribe una función de flecha que reciba como parámetro un valor en dolar y cacule su valor en pesos argentinos.
 Modifica dicha función para que se pueda enviar como parámetro también el valor del dolar oficial para realizar
  el cálculo.
*/

//Ejercicio 3
/*
Escribe una función anónima que reciba una palabra o frase cómo parámetro y retorne cuantas vocales contiene.
*/

//Ejercicio 4 
/*
Dado el siguiente texto:
"Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.
Steve Wozniak, conocido cariñosamente como "Woz", era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.
Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora."

Crear una función anónima que reciba el texto como parámetro y retorne la cantidad de veces que aparece la palabra 'computadora' en el mismo.
Luego usar dicha función para devolver en el navegador un mensaje que diga 'La palabra... aparece ... veces en el texto original'
*/


//Ejercicio 5
/*
Biblioteca
Diseña una función declarativa que reciba como parámetro un array y muestre la lista de sus elementos alfabéticamente y como si fuera una lista ordenada de html.
Declara un array de 10 elementos que contenga libros de cualquier categoría y úsalo como argumento de la función anterior.
Ejemplo de como debería verse en el navegador:
1 - Biografía de Stev Jobs
2 - Casa blanca
3 - ....
*/


//1 
/*
Crea tres arrays de 5 números cada uno, luego escribe una función declarativa que reciba los tres arrays como parámetros 
y realice las siguientes tareas:
- Unir los tres arrays en un nuevo array llamado 'integrados' 
- Ordenar el array de menor a mayor
- Crear un nuevo array que contenga todos los números del array 'integrados' que sean menores de 60.
*/

        

//1

let arrays1 = [10,15,6,7,23]
let arrays2 = [1,5,36,27,2]
let arrays3 = [11,19,26,17,3]

function grupoArrays(array1, array2, array3 ) {
    
    let integrados = array1.concat(array2, array3)
    integrados.sort(function(a,b){
        return a - b
    })
    let menoresDe60 = integrados.filter(function(numero){
        return numero < 60
    })

    return integrados, menoresDe60
  
}
grupoArrays(arrays1,arrays2,arrays3)
console.log("Array integrado:", integrados);
console.log("Numeros menores de 60:", menoresDe60);

//2


let valorDolar = 1341
let valorDolarOficial = 890

   const calcular = (valorDolar, valorDolarOficial) => valorDolar * valorDolarOficial
   const valorEnPesoArg = calcular(valorDolar, valorDolarOficial)
   console.log(`El valor del dolar ${valorDolar} en peso Argentino es de : ${valorEnPesoArg}`);



//3 

const contarVocales = function(texto){
   const vocalesEnMayuscula = texto.toLocaleUpperCase()
    const vocales = "aeiou"  
    let contadorVocales = 0
    for (let i = 0; i < texto.length; i++) {
        if(vocales.includes(texto[i])){
            contadorVocales++
        }
        
    }
    return contadorVocales
}


const textoDeUsuario = prompt("Ingrese una palabra o frase")
const cantidadDeVocales = contarVocales(textoDeUsuario)
console.log(`El texto ingresado tiene ${cantidadDeVocales} vocales`);


//4 
const texto ="Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.Steve Wozniak, conocido cariñosamente como Woz, era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora."
 const palabraComputadora = function(texto){
    const palabraMinuscula = texto.toLowerCase()
    const computadora = palabraComputadora.filter((palabraComputadora) => palabraComputadora === "computadora")
    return computadora.length
}


const cantidadDePalabras = palabraComputadora(texto)
console.log(`La palabra "computadora" a parece ${cantidadDePalabras} veces en el texto`)




   

  


  