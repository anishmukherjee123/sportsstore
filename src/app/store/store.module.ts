import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {StoreComponent} from './store.component';
import {CounterDirective} from './counter.directive';
import {CartSummaryComponent} from './cartSummary.component';
import {CheckoutComponent} from './checkout.component';
import {CartDetailComponent} from './cartDetail.component';
// Lets me use the routerLink in the html template of the store component
import {RouterModule} from "@angular/router"

@NgModule({
    // imports are imported components from other modules
    imports:[ModelModule, BrowserModule, FormsModule, RouterModule],
    // declarations make sure that everything in the module knows each other
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    // exports are which components this module wants ot with others
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule{}