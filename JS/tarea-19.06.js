/* Tarea para el fin de semana:
1. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
2. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
3. Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
4. Escribir un programa que solicite una nota (número) de 0  a 10. 
Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
5. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
6. El verdulero de la esquina necesita una aplicación donde según la fruta que ingrese le diga 
el precio por kilo

7. Realizar una pagina con un script que calcule el valor de laletra de un numero de DNI (Documento Naconal de Identidad)
 El algoritmo para calcular la letra del DNI es el siguiente:
 el numero debe ser entre 0 y 99999999
 Debemos calcular el resto de la division entera entre el numero y el numero 23.
 segun el resultado de 0 a 22, le correspondera una letra de las
  siguientes: (T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E)
  Si lo introducido n es un numero, debera indicarse con un alert y volver a preguntar .
  debera repetirse el proceso hasta que el usuario pulse "cancelar"

  ejemplo:
  Input: 40773821
  Ouput: "L"

  8. cREA UN sCRIPT QUE ESCRIBA LOS NUMEROS DE 1 A 500, QUE INDIQUE CULES SON MULTIPLOS DE 4 Y DE 9 Y QUE CADA 5 LINEAS MUESTRE UNA LINEA HORIZONTAL. POR EJEMPLO
  1
  2
  3
  4(MULTIPLO DE 4)
  5
  ---------------------
  6
  7
  8 (MULTIPLO DE )
  9(MULTIPLO DEE 9)
  10




  ``  comillas
*/


//1
/*let numero1 = Number (prompt(" ingrese un numero Por favor"))
console.log(numero1)
let numero2= Number (prompt(" ingrese un segundo numero Por favor"))
console.log(numero2)

let proceso = numero1 >= numero2
console.log(proceso)

//2

/*let numerosDivisibles = Number(prompt("Ingrese un numero que sea divisible por 2, 3, 5, 7 por favor"))
console.log(numerosDivisibles)

if(numerosDivisibles % 2 === 0){
    console.log( `El numero = ${numerosDivisibles} es divisible por 2` )
}else if(numerosDivisibles % 3 === 0){
    console.log( ` El numero = ${numerosDivisibles} es divisible por 3` )
}else if(numerosDivisibles % 5 === 0){
    console.log( `El numero = ${numerosDivisibles} es divisible por 5` )
}else if(numerosDivisibles % 7 === 0){
    console.log( `El numero = ${numerosDivisibles} es divisible por 7` )
}else{
    console.error("El numero ingresado no es divisible por 2, 3, 5, 7, por favor vuelve a ingresar un nuevo numero")
}/*11*/

//3
/*let edadUsuario = parseInt(prompt("Usuario ingrese su edad"))
console.log(edadUsuario)

if(edadUsuario >= 18){
    console.log(`Usted tiene ${edadUsuario} años, ya puede conducir`)
}else{
    console.error(`Usted tiene ${edadUsuario} años, es menor de edad ¡NO PUEDE CONDUCIR!`)
}



//4
 /*let nota = parseInt(prompt("Ingrese su nota (numero) 0 a 10"))
 if(isNaN (nota)){
alert("Ingresa un numero valido")
}else{
    /*nota = parseFloat (nota)*/
  /*  if(nota<0 || nota > 10){
        alert("Erorr") 
    }else{
        if (nota >= 0 && nota <= 2){
            alert("muy deficiente")
        }else if (nota >= 3 && nota <= 4){
            alert (`Nota ${nota} "insuficiente"`)
        }else if (nota>= 5 && nota <= 6){
            alert(`Nota ${nota} "Suficiente"`)
        }else if(nota === 7){
            alert(`Nota ${nota} "Bien"`)
        }else if(nota >= 8 && nota <=9){
            alert(`Nota ${nota} "Notable"`)
        }else if (nota === 10){
            alert(`Nota ${nota} "Sobresaliente"`)
        }
    }
   
}


//5 
/*let sumaTotal = 0

while(true){
    let numeros = parseFloat(prompt("Ingrese un numero")) 

    if(numeros === null){
        break;

    } else if (isNaN (numeros)){
        alert("No es un numero. Introduce un numero valido")
    }else{
        sumaTotal += numeros
    }
 alert( "La suma total es" + sumaTotal)
}

//6

/*let precios = {
    manzana: 1000.00,
    banana: 650.50,
    naranja: 400.00,
    pera: 430.50,
    uva: 1200.00
};

let fruta = prompt("Ingrese la fruta/ verdura que desea saber el precio por kilogramo:");

if (precios[fruta.toLowerCase()]) {
    alert(`El precio por kilo de ` + fruta + ` es $` + precios[fruta]);
} else {
    alert(`Disculpa, no tenemos el precio de esa fruta/ verdura`);
}*/




