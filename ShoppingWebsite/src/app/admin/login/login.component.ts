import { Component, OnInit } from '@angular/core';
import { FirebaseLoginService } from '../firebase-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:FirebaseLoginService) { }

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
    this.loginService.signin(val.email, val.pass);
  }

  logout():void{
    this.loginService.logout();
  }

}
