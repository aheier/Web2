import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private totalPrice;
  private cartProducts: Product[];
  constructor(){
          this.cartProducts = [];
          this.totalPrice = 0;
      }
  
  getCartProducts() { return this.cartProducts}
  getTotalPrice() { 
      if (this.cartProducts.length == 0) return 0.00;
      this.totalPrice = 0;
      this.cartProducts.forEach( (product) =>{
          this.totalPrice += product.getPrice();
      })
      return this.totalPrice;
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
          if(removeProduct.getId() == product.getId()){
              let removed = this.cartProducts?.splice(index, 1)
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
