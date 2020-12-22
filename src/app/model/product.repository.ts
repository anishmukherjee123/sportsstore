import {Injectable} from '@angular/core';
import {Product} from './product.model';
import {StaticDataSource} from './static.datasource';

@Injectable()
// mediates access to the data source for the app
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        // copy the data from the data source into this repository, including a sorted list of the categories
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) == index).sort();
        })
    }

    // get all the products of a certain kind of category, or if they have no category at all
    getProducts(category: string = null): Product[] {
        return this.products.filter(p => category == null || category == p.category);
    }

    // return the product of this id
    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    // return the categories of the data source
    getCategories(): string[] {
        return this.categories;
    }
}