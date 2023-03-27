import { Araña } from "./araña";
import { Gato } from "./gato";
import { ListaDeAnimales } from "./listaDeAnimales";
import { Pez } from "./pez";

// Crero la instancias...
const miGato:Gato= new Gato(4,"Pocho");
const miPez:Pez= new Pez(0,"juan");
const miAraña:Araña= new Araña(8)
const miListaDeAnimales:ListaDeAnimales= new ListaDeAnimales([]);

// Agrego animales al array...

miListaDeAnimales.agregarAnimal(miGato);
miListaDeAnimales.agregarAnimal(miAraña);
miListaDeAnimales.agregarAnimal(miPez);

console.log(miListaDeAnimales);
console.log(miListaDeAnimales.buscar(miGato));

miListaDeAnimales.removerAnimal(miGato);
console.log(miListaDeAnimales);

console.log(miListaDeAnimales.buscar(miPez))
console.log(miListaDeAnimales.buscar(miGato))

miAraña.caminar(8);
miGato.comer();
miPez.jugar("Pocho");
miPez.caminar(0);

