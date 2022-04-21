import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { Cart } from './cart';
import { Product } from './product';

export class CartItem{
    constructor(public id:number,
    public name:string,
    public price:number,
    public imagePath:string,
    public qty?:number){
        this.qty=1
    }
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private totalPrice;
    private cartProducts: Observable<any[]>;;
    public cartProductsList: CartItem[] = [];
    private dbPath = '/cart';
    user = "default"
    cartRef: AngularFireList<CartItem>;
    constructor(private cookie: CookieService, private db: AngularFireDatabase) {
        if (cookie.check('userId')) {
            // this.user = cookie.get('userId')
        }
        this.cartRef = this.db.list(this.dbPath + '/' + this.user)
        this.totalPrice = 0;
        this.cartProducts = this.cartRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
        );
        this.cartProducts.subscribe(x => this.cartProductsList = x)
        // this.cartProducts.unsubscribe();
    }

    getCartProducts() {
        return this.cartProductsList
    }
    getCartProductsAsync() {
        return this.cartProducts
    }

    getTotalPrice(): number {
        if (this.cartProductsList.length == 0) return 0;
        this.totalPrice = 0;
        this.cartProductsList.forEach((product) => {
            this.totalPrice += product.price;
        })
        return this.totalPrice;
    }
    addProductIntoCart(prod: Product) {
        this.create(new CartItem(prod.id, prod.name, prod.price, prod.imagePath));
    }
    removeProductFromCart(removeProduct: any) {
        if (this.cartProductsList.length == 0) return;
        this.delete(removeProduct.key)
    }
    isProductInCart(newProduct: any): boolean {
        if (this.cartProductsList.length == 0) return false;
        let hasProduct = false
        this.cartProductsList?.forEach((item) => {
            if (newProduct.id == item.id) {
                hasProduct = true;
            }
        });
        return hasProduct;
    }
    resetCart(): Promise<void> {
        this.cartProductsList = [];
        return this.cartRef.remove();
    }


    create(item: CartItem): any {
        return this.cartRef.push(item);
    }
    delete(key: string): Promise<void> {
        return this.cartRef.remove(key);
    }

}
