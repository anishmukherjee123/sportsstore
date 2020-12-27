import {Component} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductRepository} from '../model/product.repository';

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {

    public selectedCategory = null;

    // variables used to split displayed product results over multiple pages
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: ProductRepository) {
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

    // this is a method to return a range of page numbers, required to display navigation buttons
    get pageNumbers(): number[] {
        // create an array of the correct size and fill it with increasing integers
        return Array(Math.ceil(this.repository.getProducts().length / this.productsPerPage)).fill(0).map((x, i) => i + 1);
    }

}