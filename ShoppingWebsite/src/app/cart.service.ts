import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Cart = new Cart( [], 0);
  constructor() { 
  }
}
