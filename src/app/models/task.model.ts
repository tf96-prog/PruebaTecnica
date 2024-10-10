export interface Task{

    
    titulo:string,
    descripcion:string,
    items: Item[];


}



export interface Item{

    completado:boolean;


}