import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '24FEB22';
  submit:any;

  log(value:any){
    console.log(value)
  }
  onSubmit(val:any){
    this.submit = val;
  }
}
