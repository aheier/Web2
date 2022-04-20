import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PhoneDirective } from './phone.directive';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import { RatingComponent } from './rating/rating.component';
import { AdminModule } from './admin/admin.module';
import { environment } from 'src/environments/environment';

import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    PhoneDirective,
    ConfirmDialogComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatIconModule,
    AdminModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
