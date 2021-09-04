import {NgModule} from '@angular/core';
import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {Cart} from "./cart.model";
import {Order} from "./order.model";
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    // adding things here registers the class as a service
    // the change to providers makes it so that we don't have to change other code, javascript
    // will dynamically switch types if the methods are the same, pretty cool
    // this is also because we are using DI (services)
    imports: [HttpClientModule],
    providers:[ProductRepository, StaticDataSource, Cart, Order, OrderRepository,
    {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule{}