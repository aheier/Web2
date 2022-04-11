import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Array<Product> = []
  constructor() { 
    this.products.push(new Product(1, "Court Vision Alta Sneaker", 67.34, "lorum ipsum dolor", '/assets/images/shoe1.png', 1));
    this.products.push(new Product(2, "Air Max SC Sneaker", 68.34, "lorum ipsum dolor", '/assets/images/shoe2.png', 2));
    this.products.push(new Product(3, "Court Vision Alta Sneaker", 69.34, "lorum ipsum dolor", '/assets/images/shoe3.png', 3));
    this.products.push(new Product(4, "Offcourt Slide Sandal", 10.34, "lorum ipsum dolor", '/assets/images/shoe4.jpg', 4));
    this.products.push(new Product(5, "Kawa Slide Sandal", 21.34, "lorum ipsum dolor", '/assets/images/shoe5.jpg', 5));
    this.products.push(new Product(6, "Tanjjun", 21.34, "lorum ipsum dolor", '/assets/images/shoe6.jpg', 6));
    this.products.push(new Product(7, "Quest 4 Running Shoe", 67.34, "lorum ipsum dolor", '/assets/images/shoe1.png', 1));
    this.products.push(new Product(8, "Cort Royale 2 Low Sneaker", 68.34, "lorum ipsum dolor", '/assets/images/shoe2.png', 2));
    this.products.push(new Product(9, "Court Legacy Next Natural Sneaker", 69.34, "lorum ipsum dolor", '/assets/images/shoe3.png', 3));
    this.products.push(new Product(10, "Air Max Intrlk 75 Sneaker", 10.34, "lorum ipsum dolor", '/assets/images/shoe4.jpg', 4));
    this.products.push(new Product(11, "Air Max SC Sneaker", 21.34, "lorum ipsum dolor", '/assets/images/shoe5.jpg', 5));
    this.products.push(new Product(12, "Air Max Bella 5 Training Shoe", 21.34, "lorum ipsum dolor", '/assets/images/shoe6.jpg', 6));
    this.products.push(new Product(13, "This is an extra long name and can show up in all search", 21.34, "This is a shoe description that is very long for testing if the turncate function" + 
    " of bootstrap will work or if this will enlargent he the whole card", '/assets/images/shoe1.png', 4));
    this.products.push(new Product(16, "Shoe3", 69.34, "lorum ipsum dolor", '/assets/images/shoe3.png', 3));
    this.products.push(new Product(17, "Shoe4", 10.34, "lorum ipsum dolor ", '/assets/images/shoe4.jpg', 4));
    this.products.push(new Product(18, "Shoe5", 21.34, "This is a shoe5", '/assets/images/shoe5.jpg', 5));
    this.products.push(new Product(19, "Shoe6", 21.34, "This is a shoe5", '/assets/images/shoe6.jpg', 6));
    this.products.push(new Product(20, "Shoe3", 69.34, "This is a shoe3", '/assets/images/shoe3.png', 3));
    this.products.push(new Product(21, "Shoe4", 10.34, "This is a shoe4", '/assets/images/shoe4.jpg', 4));
    this.products.push(new Product(22, "Shoe5", 21.34, "This is a shoe5", '/assets/images/shoe5.jpg', 5));
    this.products.push(new Product(23, "Shoe6", 21.34, "This is a shoe5", '/assets/images/shoe6.jpg', 6));
    this.products.push(new Product(24, "Shoe3", 69.34, "This is a shoe3", '/assets/images/shoe3.png', 3));
    this.products.push(new Product(25, "Shoe4", 10.34, "This is a shoe4", '/assets/images/shoe4.jpg', 4));
    this.products.push(new Product(26, "Shoe5", 21.34, "This is a shoe5", '/assets/images/shoe5.jpg', 5));
    this.products.push(new Product(27, "Shoe6", 21.34, "This is a shoe5", '/assets/images/shoe6.jpg', 6));
    this.products.push(new Product(28, "Shoe3", 69.34, "This is a shoe3", '/assets/images/shoe3.png', 3));
    this.products.push(new Product(29, "Shoe4", 10.34, "This is a shoe4", '/assets/images/shoe4.jpg', 4));
    this.products.push(new Product(30, "Shoe5", 21.34, "This is a shoe5", '/assets/images/shoe5.jpg', 5));
  }
}
