import { Animal } from "./absAnimal";

//Creo la clase Araña que hereda de la clase Animal...

export class Araña extends Animal{
    constructor(paramPatas:number){
        super(paramPatas)
    }

    public comer():void {
        console.log(`La Araña esta Comiendo`);
        
    }
    
    public caminar(patas:number):void{
        console.log(`La araña tiene ${this.getPatas()} patas y esta caminando`);
        
    }
}