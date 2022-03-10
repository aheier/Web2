import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4';
  departments:Array<String>=[
    "Accounting",
    "Business",
    "Finance",
    "Human Resource",
    "Information Technology",
    "Marketing"
  ]
}
