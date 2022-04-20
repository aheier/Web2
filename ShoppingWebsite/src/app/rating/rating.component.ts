import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() initialRating:number = 0;
  rating:number = 0;
  @Output() ratingEmitter = new EventEmitter<number>();

  ratingChange(value: number) {
    this.ratingEmitter.emit(value);
  }
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }
  ];

  constructor( ) {
   }
  ngOnInit(): void {
    // console.log(this.selectedRating)
    this.rating = this.initialRating;
    
    this.stars.filter((star) => {
      if (star.id <= this.rating) {
        star.class = 'star-gold star star-hover';
      } else {
        star.class = 'star-gray star star-hover';
      }
      return star;
    });
  }
  selectStar(value: any): void {
    // prevent multiple selection
    // console.log(this.selectedRating)
    // if (this.selectedRating === 0) {
      this.stars.filter((star) => {
        if (star.id <= value) {
          star.class = 'star-gold star star-hover';
        } else {
          star.class = 'star-gray star star-hover';
        }
        return star;
      });
    // }
    this.rating = value;
    this.ratingChange(this.rating);
  }

}