import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseLoginService } from '../firebase-login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private db:AngularFireDatabase, private router:Router,
    private login:FirebaseLoginService) { }

  ngOnInit(): void {
  }

  async onSubmit(form:FormGroup){
    console.log(form)
    console.log(form.value)
    let val = form.value
    const memberRef = this.db.list('/members');

    memberRef.push(val)
    await this.login.signup(val['email'], val['pass']);
    this.router.navigateByUrl('/about', { state:{firstName : val.firstName, lastName: val.lastName}});
    //   {
    //   firstName: val['firstName'],
    //   lastName: val['lastName'],
    //   email: val['email'],
    //   gender: val['gender'],
    //   isSubscribed: val['isSubscribed'],
    //   pass: val['pass'],
    //   phone: val['phone'],
    // })
  }

}
