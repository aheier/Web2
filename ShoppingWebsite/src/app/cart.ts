import { Product } from "./product";

export class Cart {
    constructor(private cartProducts:Array<Product>,
        private totalPrice:number){
            this.cartProducts = [];
            this.totalPrice = 0;
        }
    
    getCartProducts() { return this.cartProducts}
    getTotalPrice() { 
        if (this.cartProducts.length == 0) return;
        this.totalPrice = 0;
        this.cartProducts.forEach( (product) =>{
            this.totalPrice += product.getPrice();
        })
    }

    addProductIntoCart(newProduct:Product){
        this.cartProducts?.forEach( (product) =>{
        if(newProduct.getId() == product.getId()) {
            return;
            }
        })
        this.cartProducts?.push(newProduct);
    }

    removeProductFromCart(removeProduct:Product){
        if(this.cartProducts.length==0) return;

        this.cartProducts.forEach( (product, index) => {
            console.log("loop")
            if(removeProduct.getId() == product.getId()){
                let removed = this.cartProducts?.splice(index, 1)
                console.log("Splice " + removed)
            }
        });
    }

    isProductInCart(newProduct:Product){
        if (this.cartProducts.length == 0) return false;
        let hasProduct = false
        this.cartProducts?.forEach( (product) => {
            if(newProduct.getId() == product.getId()){
                hasProduct = true;
            }
        });
        return hasProduct;
   }
}
