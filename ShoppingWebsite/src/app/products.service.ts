import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
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
    this.productsRef = this.db.list(this.dbPath);
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

}
