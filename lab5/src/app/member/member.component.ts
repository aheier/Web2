import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FirebaseLoginService } from '../firebase-login.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  hasAccess:boolean | undefined;
  message = ""

  constructor(private loginService:FirebaseLoginService, private cookie:CookieService) { }

  ngOnInit(): void {
    this.hasAccess = this.cookie.get("userId") == "" ? false : true;
  }

  // npm install --save ngx-cookie-service
  async onLogin(v:any){
    console.log(v)
    await this.loginService.signin(v.email, v.password);
    if(this.loginService.isLoggedIn){
      this.hasAccess = true;
      this.cookie.set("userId", v.email);
      this.cookie.set("userType", "Admin")
      return;
    }
    this.message = 'Invalid email/password'
  }

  onLogout(){
    this.hasAccess=false;
    this.loginService.logout()
    this.cookie.set("userId", "");
    this.cookie.set("userType", "");
  }

}
