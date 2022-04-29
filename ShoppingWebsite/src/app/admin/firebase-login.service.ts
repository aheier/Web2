import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../cart.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoginService  {

  isLoggedIn: boolean | undefined;
  hasAccess: boolean | undefined;
  constructor(private firebaseAuth: AngularFireAuth,
    private cookie: CookieService, private cartService:CartService) {
    this.isLoggedIn = this.cookie.check('userId')
    if (this.cookie.check('userType')) {
      this.hasAccess = this.cookie.get('userType') == "Admin"
    }
  }


  async signin(email: string, pass: string): Promise<void> {
    await this.firebaseAuth.signInWithEmailAndPassword(email, pass)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      }).catch((error) => {
        console.log(error);
        throw new Error("bad login")
      });
    if (this.isLoggedIn) {
      this.hasAccess = true;

      this.cookie.set("userId", email);
      this.cookie.set("userType", "Admin");
    }
    this.cartService.init()
  }
  async signup(email: string, pass: string): Promise<void> {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, pass)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      }).catch((error) => console.log(error))
    if (this.isLoggedIn) {
      this.hasAccess = true;
      this.cookie.set("userId", email);
      this.cookie.set("userType", "Admin");
    }
    this.cartService.init()
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('user');
    this.hasAccess = false;
    this.cookie.set("userId", "");
    this.cookie.set("userType", "");
    this.cookie.delete("userId");
    this.cookie.delete("userType");
    this.cartService.init()
    console.log(this.cookie.get('userType'))
  }
}
