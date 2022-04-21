import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

  constructor( private productService:ProductsService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    form.form.value.id = Date.now()
    console.log(form.form.value)
    this.productService.create(form.form.value);
    form.reset();
  }

}
