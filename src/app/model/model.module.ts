import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {Cart} from "./cart.model";

@NgModule({
    // adding things here registers the class as a service
    providers:[ProductRepository, StaticDataSource, Cart]
})
export class ModelModule{}