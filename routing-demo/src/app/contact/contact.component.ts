import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  size:number = 4

  items:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  constructor() { }

  ngOnInit(): void {
  }

}
