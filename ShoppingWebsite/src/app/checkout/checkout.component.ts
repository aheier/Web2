import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  isUseShipping: boolean = false;
  constructor(private cartService: CartService, public dialog: MatDialog,
    private router:Router, private toastr:ToastrService) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
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
          s += item.getName() + ', ';
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
