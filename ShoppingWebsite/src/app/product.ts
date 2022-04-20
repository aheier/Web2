
export class Product {
    constructor(private id:number,
        public name:string,
        public price:number,
        public description:string,
        public imagePath:string,
        public rating:number){
        }
    private isInCart:boolean = false;
    setCart(val:boolean){ this.isInCart = val}
    inCart(){ return this.isInCart}
    getId(){ return this.id }
    getName(){ return this.name }
    getDescription(){ return this.description }
    getPrice(){ return this.price }
    getImagePath(){ return this.imagePath }
    getRating():number { return this.rating }
    setRating(n:number){ 
        this.rating = n
    }
}
