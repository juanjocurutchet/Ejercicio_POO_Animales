//Creo la interfase Mascota...

export interface Mascota{
    getNombre():string;
    setNombre(nombre:string):void;
    jugar(nombre:string):void;

}