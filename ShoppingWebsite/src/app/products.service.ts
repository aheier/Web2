import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Array<Product> = []
  constructor() { 
    this.products.push(new Product(1, "Shoe1", 67.34, "This is a shoe1", '/assets/images/shoe1.jpg'));
    this.products.push(new Product(2, "Shoe2", 68.34, "This is a shoe2", '/assets/images/shoe2.jpg'));
    this.products.push(new Product(3, "Shoe3", 69.34, "This is a shoe3", '/assets/images/shoe1.jpg'));
    this.products.push(new Product(4, "Shoe4", 10.34, "This is a shoe4", '/assets/images/shoe2.jpg'));
    this.products.push(new Product(5, "Shoe5", 21.34, "This is a shoe5", '/assets/images/shoe1.jpg'));
  }
}
