import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';
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
  products: Observable<any[]>;
  filteredProducts: Product[] = [];
  query = "";

  constructor(private productService: ProductsService, private cartService: CartService,
    private activatedRoute: ActivatedRoute, private toastr: ToastrService,) {
    this.products = this.productService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    this.products.subscribe(x => this.filteredProducts = x)
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.query = params['search'];
      if (this.query == "" || this.query == null) {
        this.products = this.productService.getAll().snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        );
        this.products.subscribe(x => this.filteredProducts = x);
        return;
      }
      this.filterProducts(this.query);
    });
  }
  changeSize(n: number) {
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
      this.toastr.success(product.name + " added to cart.", "Item Added", {
        timeOut: 2000
      })
    }
  }
  filterProducts(search: string) {
    this.products = this.productService.getAll().snapshotChanges().pipe(
      map(changes =>{
        changes = changes.filter(p => {
          if(p.payload.val()?.name.toLowerCase().includes(search.toLowerCase()) ||
                p.payload.val()?.description.toLocaleLowerCase().includes(search.toLowerCase())){
                  return true;
          }
          return false;
        })
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      })
    );
  }

  setRating(product: any, value: any) {
    // product.rating = value;
    // console.log(product.key + ' ' + value + " " + product.rating)
    this.productService.update(product.key, { rating: value }).then((success) => {
      this.toastr.success("Rating Updated")
    }, (error) => {
      this.toastr.warning(error, "Rating not updated")
    }).catch((reason) => console.error(reason))
  }
}
