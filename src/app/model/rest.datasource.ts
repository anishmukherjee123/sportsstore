import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";

// contsants to make life easier
const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    // string to represent the url to use for requests
    baseUrl: string;

    constructor(private http: HttpClient) {
        // constructing the URL
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + "products");
    }

    // send an http request using the http service including the order
    // make it observable to only send a post request when something changes
    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + "orders", order);
    }
}