import {Injectable} from '@angular/core';
import {Product} from './product.model';

/*

This file represent the cart class. It holds multiple CartLines, keeps track of how many products, and their total price.

*/
@Injectable()
export class Cart {
    // product selections are modeled as an array of CartLine objects
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    // add a product to the cartline
    // default quantity of products is 1
    addLine(product: Product, quantity: number = 1) {
        // find the product in the cart that corresponds to the argument
        let line = this.lines.find(line => line.product.id == product.id);
        // only execute if such a product is found
        if(line != undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }

    // update the quantity within the CartLine of some product
    updateQuantity(product: Product, quantity: number) {
        let line = this.lines.find(line => line.product.id == product.id);
        if(line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }

    // remove a cart line
    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    // clear all lines from the cart
    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    // update the itemcount and cart price
    private recalculate() {
        // first, set variables to 0
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l => {
            this.itemCount += l.quantity;
            this.cartPrice += (l.quantity * l.product.price);
        })
    }
}

export class CartLine {
    
    constructor(public product: Product, public quantity: number) {

    }

    // calculate the total price of all of the products on this line
    get lineTotal() {
        return this.product.price * this.quantity;
    }

}