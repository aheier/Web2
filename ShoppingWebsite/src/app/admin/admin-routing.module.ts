import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductManagementComponent } from './product-management/product-management.component';

const routes: Routes = [
    {path: 'admin/login', component: LoginComponent},
    {path:"admin/product", component:ProductManagementComponent, canActivate: [AuthGuard]},
    {path:"admin/orders", component:OrdersComponent, canActivate: [AuthGuard]},
    {path:"admin", redirectTo:"admin/login"}
        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
