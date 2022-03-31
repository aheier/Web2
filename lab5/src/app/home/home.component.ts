import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  volunteers:Array<any> = []
  allVolunteers:AngularFireList<any> | undefined;

  constructor(public db: AngularFireDatabase) {
    this.allVolunteers = this.db.list('/voluneers')
    this.allVolunteers.valueChanges().subscribe( x => {
      this.volunteers = x;
    });
  }

  ngOnInit(): void {
  }

}
