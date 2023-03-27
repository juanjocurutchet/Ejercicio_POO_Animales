import { Animal } from "./absAnimal";

// Creo la clase ListaDeAnimales y alico composicion con la clase Animal...

export class ListaDeAnimales{
    private animales:Animal[];

    constructor(paramAnimales:Animal[]){
        this.animales=[];
    }

   
    buscar(animal: Animal): boolean {
        return this.animales.includes(animal);
      }

   
    public agregarAnimal(animal:Animal):void{ 
        this.animales.push(animal);

    }

   
    removerAnimal(animal: Animal): void {
        const indice = this.animales.indexOf(animal);
        if (indice !== -1) {
          this.animales.splice(indice,1);
        }
    }
}