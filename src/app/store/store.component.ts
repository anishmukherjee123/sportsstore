import {Component} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductRepository} from '../model/product.repository';
import {Cart} from '../model/cart.model';
import {Router} from "@angular/router";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {

    public selectedCategory = null;

    // variables used to split displayed product results over multiple pages
    public productsPerPage = 4;
    public selectedPage = 1;

    // create a private property called router thats a Router object, used for URL routing
    constructor(private repository: ProductRepository, private cart: Cart, private router: Router) {
    }

    get products(): Product[] {
        // get the lower bound index to display products from
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    // return the number of pages, feed this information to the counter directive within the html template
    get pageCount(): number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage);
    }

    // this is a method to return a range of page numbers, required to display navigation buttons
    // get pageNumbers(): number[] {
    //     // create an array of the correct size and fill it with increasing integers
    //     return Array(Math.ceil(this.repository.getProducts().length / this.productsPerPage)).fill(0).map((x, i) => i + 1);
    // }

    // method to add something to the cart
    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }

}