import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {StoreModule} from './store/store.module';
import {StoreComponent} from './store/store.component'
import {CheckoutComponent} from './store/checkout.component'
import {CartDetailComponent} from './store/cartDetail.component'
// Angular module used to set up URL routing
import {RouterModule} from '@angular/router'
// class to prevent user from modifying their URL for routing
import {StoreFirstGuard} from "./storeFirst.guard"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule,
    // setting up URL routing
    RouterModule.forRoot([
      // store path + which component to use
      {path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]},
      // cart path
      {path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard]},
      // checkout + which component to use
      {path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
      // any other URL goes to store
      {path: "**", redirectTo: "/store"},

    ])
  ],
  // lists all the services globally available in the app
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
