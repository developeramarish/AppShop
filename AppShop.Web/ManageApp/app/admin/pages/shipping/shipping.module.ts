import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShippingRoutes } from './shipping.routes';

import { ShippingListComponent } from './components/shipping-list/shipping-list.component';

@NgModule({
    imports: [
        RouterModule.forChild(ShippingRoutes)
    ],
    declarations: [
        ShippingListComponent
    ]
})
export class ShippingModule { }
