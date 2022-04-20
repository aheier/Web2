import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoginService {

  isLoggedIn = false;
  constructor(private firebaseAuth:AngularFireAuth) {

   }
   async signin(email:string, password:string){
     await this.firebaseAuth.signInWithEmailAndPassword(email, password)
     .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
     }).catch(error => console.log(error))
   }

   async signup(email:string, password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
     this.isLoggedIn = true;
     localStorage.setItem('user', JSON.stringify(res.user));
    }).catch(error => console.log(error))
  }

  async logout(){
    await this.firebaseAuth.signOut();
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }
}
