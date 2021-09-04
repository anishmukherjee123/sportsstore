import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {Cart} from "./cart.model";
import {Order} from "./order.model";
import { OrderRepository } from './order.repository';

@NgModule({
    // adding things here registers the class as a service
    providers:[ProductRepository, StaticDataSource, Cart, Order, OrderRepository]
})
export class ModelModule{}