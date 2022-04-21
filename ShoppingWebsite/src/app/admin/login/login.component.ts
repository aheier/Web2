import { Component, OnInit } from '@angular/core';
import { FirebaseLoginService } from '../firebase-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:FirebaseLoginService) { }

  invalidLogin? = false;
  ngOnInit(): void {
  }

  isLoggedIn():boolean{
    if(this.loginService.isLoggedIn){
      return true;
    }
    return false;
  }

  login(val:any):void{
    // console.log(typeof(val));
    this.loginService.signin(val.email, val.pass).catch(error =>{
      this.invalidLogin = true;
      return;
    })
    this.invalidLogin = this.loginService.isLoggedIn;
  }

  logout():void{
    this.loginService.logout();
  }

}
