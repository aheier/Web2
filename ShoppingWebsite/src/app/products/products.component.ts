import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  size: number = 3;
  products?: Product[];
  filteredProducts?: Product[];
  query = "";

  constructor(private productService: ProductsService, private cartService: CartService,
    private activatedRoute: ActivatedRoute, private toastr: ToastrService, private db: AngularFireDatabase) {
      this.productService.getAll().valueChanges()
      .subscribe(data => {
        this.products = data;
      });
    console.log(this.products)
  }

  ngOnInit(): void {
    // this.productService.create(new Product(17, "Shoe4", 10.34, "lorum ipsum dolor ", '/assets/images/shoe4.jpg', 4))
    this.activatedRoute.queryParams.subscribe(params =>{
      this.query = params['search'];
      // console.log(this.query)
      if(this.query == "" || this.query == null){
        this.filteredProducts = this.products;
        return;
      }
      this.filterProducts(this.query);
    });
  }
  changeSize(n: number) {
    console.log(this.products)
    console.log(this.filteredProducts)
    this.size += n;
    if (this.size > 6) {
      this.size = 6;
      return;
    }
    if (this.size == 5) {
      this.size += n;
      return;
    }
    if (this.size < 3) {
      this.size = 2;
    }
  }

  isInCart(product: Product) {
    return this.cartService.isProductInCart(product)
  }
  addProductToCart(product: Product) {
    if (!this.isInCart(product)) {
      this.cartService.addProductIntoCart(product)
      this.toastr.success(product.getName() + " added to cart.", "Item Added",{
        timeOut:2000
      })
    }
  }
  filterProducts(search: string) {
    // this.filteredProducts;
    // this.products.forEach(element => {
    //   if(element.getName().toLocaleLowerCase().match(search.toLowerCase())){
    //     this.filteredProducts.push(element);
    //   }
    // });

  }
}
