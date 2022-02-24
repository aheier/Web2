export class Item{
    constructor(private id: number, private name:string, private price:number){

    }
    get Id(){return this.id;}
    get Name(){return this.name;}
    get Price(){return this.price;}
    set Id(id:number){this.id = id;}
    set Name(name:string){this.name = name;}
    set Price(price:number){this.price = price;}

    showItemInfo():void{
        console.log("ID: " + this.id + " | Name: " + this.name + 
            " | Price: " + this.price);
    }
}