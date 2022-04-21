import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from 'src/app/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  // orderObs: Observable<any[]>;
  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
  }

  getOrders(){
    return this.orderService.getOrders()
  }

}
