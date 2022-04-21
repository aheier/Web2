import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { CartService } from '../cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  years = new Array(12)
  shipCityState? = ""
  billCityState? = ""

  zipToCity = new Map<string, string>() 
  isUseShipping: boolean = false;

  constructor(private cartService: CartService, public dialog: MatDialog,
    private router:Router, private toastr:ToastrService) {
      this.zipToCity.set("55987", "Winona, MN")
      this.zipToCity.set("55988", "Stockton, MN")
      this.zipToCity.set("55990", "Wykoff, MN")
  }
  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }
  preloadZip(zip:any, isShipping:boolean){
    if(this.zipToCity.has(zip)){
      if(isShipping) {
        this.shipCityState = this.zipToCity.get(zip)
        return;
      }
      this.billCityState = this.zipToCity.get(zip)
      // this.
    }
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }
  info() {
    console.log(this.isUseShipping)
  }
  onSubmit(shippingForm: NgForm, billingForm: NgForm, ccForm: NgForm) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log(typeof(result))
      if(result)
      {
        console.log(shippingForm.form.value)
        console.log(billingForm.form.value)
        console.log(ccForm.form.value)
        let s = ""
        for(let item of this.cartService.getCartProducts()){
          s += item.name + ', ';
        }
        this.toastr.success(this.cartService.getCartProducts().length + " items ordered from cart:\n" + s,
         "Items Ordered",{
          timeOut:2000
        })
        this.cartService.resetCart();
        this.router.navigate(["/products"]);
      }
    });
  }

}
