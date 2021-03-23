/*2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de acceso a las naves de guerra
 los cuáles reposan en la base de datos central, para ello debe programar una función que permita
  recibir la palabra clave de cada nave y separar imprimiendo solo el nombre del piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn
let PalabraClave1 ="ARQ2555: Sara Bel-Sun";
let PalabraClave2 ="ARQ2556: Nodin Chavdri";
let PalabraClave3 ="ARQ2557: Finn";*/



let ImprimirNombre = (palabraClave)=>
{return "El nombre del piloto es: "+palabraClave.split(": ")[1];}

console.log(ImprimirNombre("ARQ2555: Sara Bel-Sun"));
console.log(ImprimirNombre("ARQ2556: Nodin Chavdri"));
console.log(ImprimirNombre("ARQ2557: Finn"));