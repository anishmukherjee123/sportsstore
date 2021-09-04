// class to represent what is displayed when going to the /checkout URL
import {Component} from "@angular/core";
import { NgForm } from "@angular/forms";
import { OrderRepository } from "../model/order.repository";
import {Order} from "../model/order.model"

@Component({
    templateUrl: "checkout.component.html",
    // includes a css file to distinguish colors between valid and invalid forms
    styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {
    // keep track of the order status
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public repository: OrderRepository, public order: Order) {

    }

    // method to submit an order for checkout
    submitOrder(form: NgForm) {
        this.submitted = true;
        if(form.valid) {
            // take action on the observable to say that this order has been sent, update flags
            this.repository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}