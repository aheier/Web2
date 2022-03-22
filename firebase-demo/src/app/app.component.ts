import { Component } from '@angular/core';

import{
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from '@angular/fire/compat/database'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-demo';
  todos:any[] | undefined;
  allTodos:AngularFireList<any> | undefined;

  constructor(public db: AngularFireDatabase){
    this.allTodos = this.db.list('/ProductComment')
    this.allTodos.valueChanges().subscribe( x => {
      this.todos = x;
    });
  }


  add(text:HTMLInputElement){
    console.log(text.value);
    this.allTodos?.push(text.value)
    text.value = "";
  }


}
