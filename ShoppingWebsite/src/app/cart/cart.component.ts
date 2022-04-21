import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Observable<any[]>;;

  constructor(private cart:CartService, private toastr:ToastrService) {
    this.cartItems = cart.getCartProductsAsync();
   }

  ngOnInit(): void {
  }

  removeItem(item:any){
    this.cart.removeProductFromCart(item);
    this.toastr.success(item.name + " removed from cart.", "Item Removed",{
      timeOut:2000
    })

  }
  getTotalPrice(){
    return this.cart.getTotalPrice();
  }

}
