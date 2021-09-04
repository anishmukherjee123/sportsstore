// class that represents the model for keeping track of orders
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Order} from "./order.model";
import {StaticDataSource} from "./static.datasource";

@Injectable()
export class OrderRepository {
    private orders: Order[] =[];

    constructor(private dataSource: StaticDataSource) {}

    getOrders(): Order[] {
        return this.orders;
    }

    // for now, this just prints the order as a JSON string to the console
    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }
}