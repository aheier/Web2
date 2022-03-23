import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  size:number = 3;
  products:Array<Product> = [];

  constructor(private productService:ProductsService, private cartService:CartService) {
    this.products = this.productService.products;
  }

  ngOnInit(): void {
  }

  isInCart(product:Product){
    return this.cartService.cart.isProductInCart(product)
  }
  addProductToCart(product:Product){
    if(this.isInCart(product)){
      this.cartService.cart.removeProductFromCart(product)
      console.log("Remove here")
    }
    this.cartService.cart.addProductIntoCart(product)
  }

}
