import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  currentValue:string = ''

  todos: Observable<any[]> | undefined
  todoRef:AngularFireList<any> | undefined;
  constructor( private db:AngularFireDatabase) { 
    this.todoRef = this.db.list('/todos')
    this.todos = this.todoRef.snapshotChanges().pipe(
      map(changes => 
      changes.map(c => ({key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  ngOnInit(): void {
  }
  addTodo(todo:string){
    const dbRef = this.db.list('/todos')
    if(todo.length ==0) return;
    dbRef.push({
      value: todo
    })
    this.currentValue = ''
  }
  removeTodo(todo:string){
    const dbRef = this.db.list('/todos')
    dbRef.remove(todo);
  }

}
