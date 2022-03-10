import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4';
  display:string = "";
  departments:Array<String>=[
    "Accounting",
    "Business",
    "Finance",
    "Human Resource",
    "Information Technology",
    "Marketing"
  ];

  onSubmit(form:any){
    console.log(form)
    this.display = "{";
    this.display += "\n\t\"firstName\": " + form.firstName
    this.display += ",\n\t\"lastName\": " + form.lastName
    this.display += ",\n\t\"email\": " + form.email
    this.display += ",\n\t\"passord\": " + form.pass
    this.display += ",\n\t\"phoneNumber\": " + form.phone
    this.display += ",\n\t\"department\": " + form.department
    this.display += ",\n\t\"gender\": " + form.gender
    this.display += ",\n\t\"isSubscribed\": " + form.isSubscribed
    this.display += "\n}"
    console.log(this.display);
  }
}
