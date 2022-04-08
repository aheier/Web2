import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  filteredProducts:Array<Product> = [];
  query="";

  constructor(private productService:ProductsService, private cartService:CartService,
    private activatedRoute:ActivatedRoute, private toastr:ToastrService) {
    this.products = this.productService.products;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params =>{
      this.query = params['search'];
      console.log(this.query)
      if(this.query == "" || this.query == null){
        this.filteredProducts = this.productService.products;
        return;
      }
      this.filterProducts(this.query);
    });
  }
  changeSize(n:number){
    this.size += n;
    if(this.size >6){
      this.size = 6;
      return;
    }
    if(this.size == 5){
      this.size +=n;
      return;
    }
    if(this.size < 3){
      this.size = 2;
    }
  }

  isInCart(product:Product){
    return this.cartService.isProductInCart(product)
  }
  addProductToCart(product:Product){
    this.cartService.addProductIntoCart(product)
    this.toastr.success(product.getName() + " added to cart.", "Item Added",{
      timeOut:2000
    })
  }
  filterProducts(search:string){
    this.filteredProducts = [];
    this.products.forEach(element => {
      if(element.getName().toLocaleLowerCase().match(search.toLowerCase())){
        this.filteredProducts.push(element);
      }
    });

  }
}
