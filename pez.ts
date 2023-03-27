import { Animal } from "./absAnimal";
import { Mascota } from "./interfaceMascota";

//Creo la clase Pez que hereda de la clase animal e implenta la interfase Mascota...

export class Pez extends Animal implements Mascota{
    private nombre:string;

    constructor(paramPatas:number, paramNombre:string){
        super(paramPatas)
        this.nombre=paramNombre;
    }

    public comer(): void {
        console.log(`El Pez ${this.nombre} esta comiendo`);
        
    }

    public caminar(patas: number): void {
        console.log(`El pez ${this.nombre} tiene ${this.getPatas()} patas y no camina`);
        
    }

    public jugar(nombre:string){
        console.log(`El pez ${this.nombre} esta jugando en el agua`);
        
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre:string):void{
        console.log(`El pez se llama ${this.nombre}`);
         
    }
}