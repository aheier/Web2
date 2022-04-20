import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { Cart } from './cart';
import { Product } from './product';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private totalPrice;
    private cartProducts: Observable<any[]>;;
    public cartProductsList: Product[] = [];
    private dbPath = '/cart';
    user = "default"
    cartRef: AngularFireList<Product>;
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
    addProductIntoCart(newProduct: Product) {
        this.create(newProduct);
    }
    removeProductFromCart(removeProduct: any) {
        if (this.cartProductsList.length == 0) return;

        this.cartProductsList.forEach((product, index) => {
            if (removeProduct.id == product.id) {
                let removed = this.cartProductsList?.splice(index, 1)
            }
        });
        this.delete(removeProduct.key)
    }
    isProductInCart(newProduct: Product): boolean {
        if (this.cartProductsList.length == 0) return false;
        let hasProduct = false
        this.cartProductsList?.forEach((product) => {
            if (newProduct.id == product.id) {
                hasProduct = true;
            }
        });
        return hasProduct;
    }
    resetCart():Promise<void> {
        this.cartProductsList = [];
        return this.cartRef.remove();
    }

    
    create(tutorial: Product): any {
        return this.cartRef.push(tutorial);
    }
    delete(key: string): Promise<void> {
        return this.cartRef.remove(key);
    }

    // getCartProducts() { return this.cartProducts }

    // getTotalPrice() {
    //     if (this.cartProducts.length == 0) return 0;
    //     this.totalPrice = 0;
    //     this.cartProducts.forEach((product) => {
    //         this.totalPrice += product.price;
    //     })
    //     return this.totalPrice;
    // }

    // addProductIntoCart(newProduct: Product) {
    //     this.cartProducts.forEach((product) => {
    //         if (newProduct.id == product.id) {
    //             return;
    //         }
    //     })
    //     this.cartProducts?.push(newProduct);
    // }

    // removeProductFromCart(removeProduct: Product) {
    //     if (this.cartProducts.length == 0) return;

    //     this.cartProducts.forEach((product, index) => {
    //         if (removeProduct.id == product.id) {
    //             let removed = this.cartProducts?.splice(index, 1)
    //         }
    //     });
    // }

    // isProductInCart(newProduct: Product) {
    // }
    // resetCart(): void {
    //     this.cartProducts = [];
    // }
}
