// part of the application that talks to the data source and checks
// whether the administrative user has been authenticated
// this isolates the data source from the rest of the application
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AuthService {
    // data source is private, can only be seen by this class
    constructor(private datasource: RestDataSource) {

    }

    // function to call the authenticate function of the data source
    authenticate(username: string, password: string): Observable<boolean> {
        return this.datasource.authenticate(username,password);
    }

    // getter syntax to get property when just using .authenticated
    // it is authenticated if the token property of the datasource is filled
    get authenticated(): boolean {
        return this.datasource.auth_token != null;
    }

    // clear the auth token
    clear() {
        this.datasource.auth_token = null;
    }
}