// this component is built for administrative tools
// not reliant on any other modules, operates independently so that JS does not load it dynamically
// can turn on or off without affecting rest of application
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    // variables that can be accessed by other parts of the app
    public username: string;
    public password: string;
    public errorMessage: string;

    constructor(private router: Router) {

    }

    // use built in validation for now to route url if form is valid
    authenticate(form: NgForm) {
        if(form.valid) {
            this.router.navigateByUrl("/admin/main");
        } else {
            this.errorMessage = "Form Data Invalid";
        }
    }
}