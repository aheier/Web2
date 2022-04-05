import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  years=new Array(12)

  isUseShipping:boolean = false;
  constructor(private cartService:CartService) { 
  }

  ngOnInit(): void {
  }

  getTotalPrice(){
    return this.cartService.getTotalPrice();
  }
  onSubmit(shippingForm:NgForm, billingForm:NgForm, ccForm:NgForm){
    console.log(shippingForm.form.value)
  }

}
