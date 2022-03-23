import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Array<Product> = []
  constructor() { 
    this.products.push(new Product(1, "Shoe1", 67.34, "This is a shoe1", '/asses/images/png1.png'));
    this.products.push(new Product(2, "Shoe2", 68.34, "This is a shoe2", '/asses/images/png2.png'));
    this.products.push(new Product(3, "Shoe3", 69.34, "This is a shoe3", '/asses/images/png3.png'));
    this.products.push(new Product(4, "Shoe4", 10.34, "This is a shoe4", '/asses/images/png4.png'));
    this.products.push(new Product(5, "Shoe5", 21.34, "This is a shoe5", '/asses/images/png5.png'));
  }
}
