import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { reverse } from 'dns';
import { map, Observable } from 'rxjs';
import {Product} from './product';
// https://www.bezkoder.com/angular-12-firebase-crud/

export interface IProduct{
  id:number,
  name:string,
  description:string,
  price:number,
  imagePath:string,
  rating:number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private dbPath = '/products';
  productsRef: AngularFireList<Product>;
  constructor(private db: AngularFireDatabase) {
    this.productsRef = this.db.list(this.dbPath)//, ref => ref.orderByChild('name').equalTo('Shoe4'));
  }
  getAll(): AngularFireList<Product> {
    return this.productsRef;
  }
  search(search:string): AngularFireList<Product> {
    return this.db.list(this.dbPath, ref => ref.orderByChild('name').equalTo(search));
  }
  create(tutorial: Product): any {
    return this.productsRef.push(tutorial);
  }
  update(key: string, value: any): Promise<void> {
    return this.productsRef.update(key, value);
  }
  delete(key: string): Promise<void> {
    return this.productsRef.remove(key);
  }
  deleteAll(): Promise<void> {
    return this.productsRef.remove();
  }


  init(){
    let products = [];
    products.push(new Product(1, "Court Vision Alta Sneaker", 67.34, "lorum ipsum dolor", '/assets/images/shoe1.png', 1));
    products.push(new Product(2, "Air Max SC Sneaker", 68.34, "lorum ipsum dolor", '/assets/images/shoe2.png', 2));
    products.push(new Product(3, "Court Vision Alta Sneaker", 69.34, "lorum ipsum dolor", '/assets/images/shoe3.png', 3));
    products.push(new Product(4, "Offcourt Slide Sandal", 10.34, "lorum ipsum dolor", '/assets/images/shoe4.jpg', 4));
    products.push(new Product(5, "Kawa Slide Sandal", 21.34, "lorum ipsum dolor", '/assets/images/shoe5.jpg', 5));
    products.push(new Product(6, "Tanjjun", 21.34, "lorum ipsum dolor", '/assets/images/shoe6.jpg', 6));
    products.push(new Product(7, "Quest 4 Running Shoe", 67.34, "lorum ipsum dolor", '/assets/images/shoe1.png', 1));
    products.push(new Product(8, "Cort Royale 2 Low Sneaker", 68.34, "lorum ipsum dolor", '/assets/images/shoe2.png', 2));
    products.push(new Product(9, "Court Legacy Next Natural Sneaker", 69.34, "lorum ipsum dolor", '/assets/images/shoe3.png', 3));
    products.push(new Product(10, "Air Max Intrlk 75 Sneaker", 10.34, "lorum ipsum dolor", '/assets/images/shoe4.jpg', 4));
    products.push(new Product(11, "Air Max SC Sneaker", 21.34, "lorum ipsum dolor", '/assets/images/shoe5.jpg', 5));
    products.push(new Product(12, "Air Max Bella 5 Training Shoe", 21.34, "lorum ipsum dolor", '/assets/images/shoe6.jpg', 6));
    products.push(new Product(13, "This is an extra long name and can show up in all search", 21.34, "This is a shoe description that is very long for testing if the turncate function" + 
    " of bootstrap will work or if this will enlargent he the whole card", '/assets/images/shoe1.png', 4));
    products.push(new Product(16, "Shoe3", 69.34, "lorum ipsum dolor", '/assets/images/shoe3.png', 3));
    products.push(new Product(17, "Shoe4", 10.34, "lorum ipsum dolor ", '/assets/images/shoe4.jpg', 4));
    products.push(new Product(18, "Shoe5", 21.34, "This is a shoe5", '/assets/images/shoe5.jpg', 5));
    products.push(new Product(19, "Shoe6", 21.34, "This is a shoe5", '/assets/images/shoe6.jpg', 6));
    products.push(new Product(20, "Shoe3", 69.34, "This is a shoe3", '/assets/images/shoe3.png', 3));
    products.push(new Product(21, "Shoe4", 10.34, "This is a shoe4", '/assets/images/shoe4.jpg', 4));
    products.push(new Product(22, "Shoe5", 21.34, "This is a shoe5", '/assets/images/shoe5.jpg', 5));
    // this.productsFetch = this.db.list('products')
    products.forEach(el => {

    });
  }
}
