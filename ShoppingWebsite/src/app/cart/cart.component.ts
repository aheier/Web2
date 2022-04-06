import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:Product[];

  constructor(private cart:CartService, private toastr:ToastrService) {
    this.cartItems = cart.getCartProducts();
   }

  ngOnInit(): void {
  }

  removeItem(item:Product){
    this.cart.removeProductFromCart(item);
    this.toastr.success(item.getName() + " removed from cart.", "Item Removed",{
      timeOut:2000
    })

  }
  getTotalPrice(){
    return this.cart.getTotalPrice();
  }

}
