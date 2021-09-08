import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
// used to assign JWT from HTTP request to a variable
import {map} from "rxjs/operators";

// contsants to make life easier
const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    // string to represent the url to use for requests
    baseUrl: string;
    auth_token: string;

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

    // function that checks whether the JWT has successfully authenticated when given
    // a specific username/pass
    // the data source already has the correct username/pass
    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "login", {
            name: user, password: pass
        }).pipe(map(response => {
            // set the token if the response was successfully authenticated
            // otherwise set it to null
            this.auth_token = response.success ? response.token: null;
            return response.success;
        }))
    }
}