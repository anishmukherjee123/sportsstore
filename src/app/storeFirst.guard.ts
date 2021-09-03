// class to prevent users from modifying their own URL to go to pages/manipulate pages
// called a route guard

import {Injectable} from "@angular/core";
// relevant angular route garding classes
import {
    ActivatedRouteSnapshot, RouterStateSnapshot, Router
} from "@angular/router";
import {StoreComponent} from "./store/store.component"

@Injectable()
export class StoreFirstGuard{
    private firstNavigation = true;

    constructor(private router: Router) {

    }

    // method checks whether the snapshot of the route state matches the value of the internal variable,
    // which is flipped once the route is taken
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if(this.firstNavigation) {
                this.firstNavigation = false;
                // return false if flipping back to the store component
                if(route.component != StoreComponent) {
                    this.router.navigateByUrl("/");
                    return false;
                }
            }
            return true;
        }
}
