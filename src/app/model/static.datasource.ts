import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {Observable, from} from "rxjs";
import {Order} from "./order.model"

@Injectable() // declares that this class is used by angular as a service
// this class provides the app with the data
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 Category 1", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 Category 1", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 Category 1", 100),
        new Product(2, "Product 2", "Category 2", "Product 2 Category 2", 200),
        new Product(2, "Product 2", "Category 2", "Product 2 Category 2", 200),
        new Product(2, "Product 2", "Category 2", "Product 2 Category 2", 200),
        new Product(2, "Product 2", "Category 2", "Product 2 Category 2", 200),
        new Product(3, "Product 3", "Category 3", "Product 3 Category 3", 300),
        new Product(3, "Product 3", "Category 3", "Product 3 Category 3", 300),
        new Product(4, "Product 4", "Category 3", "Product 4 Category 3", 400),
        new Product(5, "Product 5", "Category 3", "Product 5 Category 3", 500),
        new Product(6, "Product 6", "Category 3", "Product 6 Category 3", 600),
        new Product(7, "Product 7", "Category 3", "Product 7 Category 3", 700),
    ];

    // Observable represents an asynchronous task that produces a result at some point
    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    // prints the order to the console for now
    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}