import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:Product[];

  constructor(private cart:CartService) {
    this.cartItems = cart.getCartProducts();
   }

  ngOnInit(): void {
  }

  removeItem(item:Product){
    this.cart.removeProductFromCart(item);

  }
  getTotalPrice(){
    return this.cart.getTotalPrice();
  }

}
