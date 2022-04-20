import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"signup", component:SignupComponent},
  {path:"about", component:AboutComponent},
  {path:"todo", component:TodoComponent},
  {path:"member", component:MemberComponent},
  {path:"**", redirectTo:"home"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
