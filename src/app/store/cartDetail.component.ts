// Represents a component to be displayed by the "/cart" URL
import {Component} from "@angular/core";
import {Cart} from "../model/cart.model"

// Temporary placeholder to replace the cart detail page
@Component({
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent{
    // cart is public so it can be modified
    constructor(public cart: Cart) {

    }
}