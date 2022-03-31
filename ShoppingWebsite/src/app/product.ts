import { isIdentifier } from "@angular/compiler";

export class Product {
    constructor(private id:number,
        private name:string,
        private price:number,
        private description?:string,
        private imagePath?:string){
        }
    private isInCart:boolean = false;
    setCart(val:boolean){ this.isInCart = val}
    inCart(){ return this.isInCart}
    getId(){ return this.id }
    getName(){ return this.name }
    getDescription(){ return this.description }
    getPrice(){ return this.price }
    getImagePath(){ return this.imagePath }
}
