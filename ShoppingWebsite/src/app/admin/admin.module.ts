import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OrdersComponent } from './orders/orders.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

import {AngularFireAuthModule} from '@angular/fire/compat/auth'

@NgModule({
  declarations: [
    LoginComponent,
    ProductManagementComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers:[CookieService]
})
export class AdminModule { }
