import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import Product from './product';
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
    this.productsRef = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Product> {
    return this.productsRef;
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
  // products:Observable<any[]> | undefined
  // productsRef:AngularFireList<any>
  // constructor(private db:AngularFireDatabase) { 
  //   this.productsRef = this.db.list('/products')
  //   this.add(new Product(17, "Shoe4", 10.34, "lorum ipsum dolor ", '/assets/images/shoe4.jpg', 4))
  //   this.products = this.productsRef.snapshotChanges().pipe(
  //     map(changes => 
  //     changes.map(c => ({key: c.payload.key, ...c.payload.val() }))
  //     )
  //   );
  // }

  // getProducts(){
  //   this.init()
  //   this.productsFetch = this.db.list('/products')
  //   this.products = this.productsFetch.snapshotChanges().pipe(
  //     map((changes: any[]) => {
  //       changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
  //     })
  //   );
  //   return this.products;
  // }
  // add(prod:Product){
  //   this.productsRef.push({
  //     id: prod.getId(),
  //     name: prod.getName(),
  //     description: prod.getDescription(),
  //     price: prod.getPrice(),
  //     imagePath: prod.getImagePath(),
  //     rating: prod.getRating()
  //   })
  // }
  // remove(id:string){
  //   const dbRef = this.db.list('/product')
  //   dbRef.remove(id);
  // }

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
    // this.productsFetch = this.db.list('products')
    products.forEach(el => {
      
    });

  }
}
