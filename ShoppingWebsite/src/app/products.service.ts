import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Array<Product> = []
  constructor() { 
    this.products.push(new Product(1, "Shoe1", 67.34, "This is a shoe1", '/assets/images/shoe1.jpg', 1));
    this.products.push(new Product(2, "Shoe2", 68.34, "This is a shoe2", '/assets/images/shoe2.jpg', 2));
    this.products.push(new Product(3, "Shoe3", 69.34, "This is a shoe3", '/assets/images/shoe1.jpg', 3));
    this.products.push(new Product(4, "Shoe4", 10.34, "This is a shoe4", '/assets/images/shoe2.jpg', 4));
    this.products.push(new Product(5, "Shoe5", 21.34, "This is a shoe5", '/assets/images/shoe1.jpg', 5));
    this.products.push(new Product(5, "Shoe this is an extra long name and can show up in all search", 21.34, "This is a shoe description that is very long for testing if the turncate function" + 
    " of bootstrap will work or if this will enlargent he the whole card", '/assets/images/shoe2.jpg', 4));
  }
}
