import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoginService  {

  isLoggedIn: boolean | undefined;
  hasAccess: boolean | undefined;
  constructor(private firebaseAuth: AngularFireAuth,
    private cookie: CookieService) {
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
      }).catch((error) => console.log(error));
    if (this.isLoggedIn) {
      this.hasAccess = true;

      this.cookie.set("userId", email, 1);
      this.cookie.set("userType", "Admin", 1);
    }
  }
  async signup(email: string, pass: string): Promise<void> {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, pass)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      }).catch((error) => console.log(error))
    if (this.isLoggedIn) {
      this.hasAccess = true;
      this.cookie.set("userId", email, 1);
      this.cookie.set("userType", "Admin", 1);
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('user');
    this.hasAccess = false;
    this.cookie.delete("userId");
    this.cookie.delete("userType");
  }
}
