import { Animal } from "./absAnimal";
import { Mascota } from "./interfaceMascota";

//Creo la clase Gato que hereda de la clase Animal e implementa la interfase Mascota...

export class Gato extends Animal implements Mascota{
    private nombre:string;
    constructor(paramPatas:number, paramNombre:string){
        super(paramPatas);
        this.nombre=paramNombre
    }

    public comer(): void {
        console.log(`El gato ${this.nombre} esta comiendo`);
        
    }

    public caminar(patas: number): void {
        console.log(`El gato ${this.nombre} tiene ${this.getPatas()} y esta caminando`);
        
    }

    public jugar(nombre:string){
        console.log(`El gato ${this.nombre} esta jugando`);
        
    }

    public getNombre():string{
        return this.nombre;
    
    }

    public setNombre(nombre:string): void{
        this.nombre=nombre;
    }
}