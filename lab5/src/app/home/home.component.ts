import { Component, OnInit, HostBinding} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { trigger, style,  animate, transition} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
//   animations : [
//     triger('fade', [
//       transition('void => *'),[
//         style({opacity : 0}),
//         animate(1000, style({opacity: 1}))
//       ]),
//       transition('* => vlid'), [
//         animate(1000, style({opacity: 0}))
//       ]
//     ]
// )
//   ]
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
