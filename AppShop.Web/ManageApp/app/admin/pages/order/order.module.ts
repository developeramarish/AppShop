import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderRoutes } from './order.routes';

import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
    imports: [
        RouterModule.forChild(OrderRoutes)
    ],
    declarations: [
        OrderListComponent
    ]
})
export class OrderModule { }
