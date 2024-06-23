/* Ejercicio 1
Tenemos un array llamado "planetas" que contiene el nombre de los planetas de nuestro sistema solar ordenados por su 
distancia con el sol, debes mostrar en consola el nombre del último planeta aplicando un método de array.

planetas=["Mercurio","Venus","Tierra","Marte","Júpiter","Saturno","Urano","Neptuno"]
*/

/* Ejercicio 2
Dada una playlist de canciones definida con un array verificar si contiene la canción 
'Ella Baila Sola' e imprimir en consola .

const lista = ['Flowers','Kill Bill','As It Was','Seven (feat. Latto)','Ella Baila Sola','Cruel Summer','Creepin’ (with The Weeknd & 21 Savage)','Calm Down (with Selena Gomez)','Shakira: Bzrp Music Sessions, Vol. 53','Anti-Hero']
*/

/* Ejercicio 3
Tenemos un array que contiene la lista de 5 pilotos de Fórmula 1, pero se nos informó que el tercero 
y cuarto quedaron descalificados por lo que hay que eliminarlos de la lista.

const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']
*/

/* Ejercicio 4
Dado el array de pilotos de Fórmula 1, agrega los nombres de 'Sergio Pérez' y 
'George Russell' después de 'Max Verstappen'.
*/

/* Ejercicio 5
Dado el array de pilotos de Fórmula 1, reemplazar 'Fernando Alonso' con 'Carlos Sainz'.
*/

/* Ejercicio 6
En un colegio hay tres comisiones distintas con 5 alumnos cada una, debido a cambios en los horarios se deben
unir las comisiones en una sola llamada 'comisionNueva'. Luego imprimir los nombres de los alumnos de la nueva comisión.
*/

/* Ejercicio 7
Crea un script que te permita agregar el nombre de varias 
ciudades en un array hasta que presiones cancelar, luego deberas mostrar en consola
 los nombres de dichas ciudades ordenadas alfabéticamente
*/

/*  Ejercicio 8
En un array se encuentra la lista de jugadores de un equipo de futbol, pero algunos de la lista estarán 
de suplentes en el próximo partido. Crea un nuevo array llamado 'suplentes' basado en dicha lista que contenga
 los nombres de los tres primeros jugadores.

let jugadores = ['Alex Collado', 'Emerson Royal', 'Iñaki Peña','Lionel Messi', 'Gerard Piqué',
 'Sergio Busquets', 'Jordi Alba', 'Frenkie de Jong', 'Ansu Fati', 'Pedri', 'Ousmane Dembélé', 'Marc-André ter Stegen',
  'Sergi Roberto', 'Ronald Araújo', 'Miralem Pjanic', 'Philippe Coutinho', 'Samuel Umtiti', 'Riqui Puig', 'Sergiño Dest',
   'Martin Braithwaite', 'Clément Lenglet', 'Sergiño Dest', 'Éric García', 'Memphis Depay', 'Neto', 'Pedri', 
   'Oscar Mingueza']
*/



//1
let planetas

console.log (planetas=["Mercurio","Venus","Tierra","Marte","Júpiter","Saturno","Urano","Neptuno"])
console.log(planetas.at(-1));

//2

const lista = ['Flowers','Kill Bill','As It Was','Seven (feat. Latto)','Ella Baila Sola','Cruel Summer','Creepin’ (with The Weeknd & 21 Savage)','Calm Down (with Selena Gomez)','Shakira: Bzrp Music Sessions, Vol. 53','Anti-Hero']
 console.log(lista);
if(lista.includes("Ella Baila Sola")){
    console.log(`Si esta incluida la cancion "Ella Baila Sola" `)
}else{
    console.log(`La cancion "Ella Baila Sola" no esta incluida`)
}

//3
const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']
console.log(f1Drivers)
console.log( f1Drivers.splice(3,2)) 

//4

console.log(f1Drivers.splice(2,0, "Sergio Perez","George Russell") );

//5
/*Dado el array de pilotos de Fórmula 1, reemplazar 'Fernando Alonso' con 'Carlos Sainz'.*/

console.log(f1Drivers)
console.log(f1Drivers.splice(3, 1, "Carlos Sainz"));

//6


let comision1 =["Pedro","Juana", "Elizabeth", "Emanuel", "Federico"]
let comision2=["Susana","Emilia","Antonio","Eliseo","Luz"]
let comision3=["Santiago","Isabela","Tomas","Jeremias","Anastasia",]
console.log(comision1,comision2,comision3)

let comisionNueva = console.log(comision1.concat(comision2,comision3));


//7
const ciudades = [];

while (true) {
  const ciudad = prompt("Introduce el nombre de una ciudad que deseé conocer  (o presiona cancelar para finalizar)");
  
  if (ciudad === null) {
    break; 
  }
  
  if (ciudad !== "") {
    ciudades.push(ciudad); 
  }
}
console.log('Ciudades ingresadas ordenadas alfabéticamente:', ciudades.sort());


//8
let jugadores = ['Alex Collado', 'Emerson Royal', 'Iñaki Peña','Lionel Messi', 'Gerard Piqué','Sergio Busquets', 'Jordi Alba', 'Frenkie de Jong', 'Ansu Fati', 'Pedri', 'Ousmane Dembélé', 'Marc-André ter Stegen', 'Sergi Roberto', 'Ronald Araújo', 'Miralem Pjanic', 'Philippe Coutinho', 'Samuel Umtiti', 'Riqui Puig', 'Sergiño Dest', 'Martin Braithwaite', 'Clément Lenglet', 'Sergiño Dest', 'Éric García', 'Memphis Depay', 'Neto', 'Pedri', 'Oscar Mingueza']
console.log(jugadores);

let suplentes = jugadores.splice(3,27)
console.log("Suplentes",jugadores);