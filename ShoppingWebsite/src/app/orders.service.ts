import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  // private cartProducts: Observable<any[]>;;
  // public cartProductsList: CartItem[] = [];
  private dbPath = '/orders';
  user = "default"
  cartRef: AngularFireList<any>;
  orderObs: Observable<any[]>;
  orderList:any[] = []
  constructor(private cookie: CookieService, private db: AngularFireDatabase) {
    if (cookie.check('userId')) {
      this.user = cookie.get('userId')
    }
    this.cartRef = this.db.list(this.dbPath)

    this.orderObs = this.cartRef.snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
    );
    this.orderObs.subscribe(x => this.orderList = x)
  }

  getOrders(){
    // console.log(this.orderList)
    return this.orderObs;
  }

  create(order: any): any {
    order['userId'] = this.user;
    return this.cartRef.push(order);
  }
  // delete(key: string): Promise<void> {
  //   return this.cartRef.remove(key);
  // }
  // constructor(private db:AngularFireDatabase) { }
}
