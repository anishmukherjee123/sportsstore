import {Component} from "@angular/core";
import {Cart} from "../model/cart.model"

// a component is a "building block", repeatable, useful for repeating UI elements
@Component({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html"
})

export class CartSummaryComponent {
    constructor(public cart: Cart) {}
}