import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  state$: Observable<object> | undefined;
  userName:any;
  constructor(public activatedRoute: ActivatedRoute) { }

  
  ngOnInit() {
    this.userName = {};
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      this.state$.subscribe( x =>{
        this.userName = x;
      })
      console.log(this.userName)
  }

}


