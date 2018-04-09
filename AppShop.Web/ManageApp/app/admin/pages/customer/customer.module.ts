import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from './customer.routes';

import { CustomerListComponent } from './components/customer-list/customer-list.component';

@NgModule({
    imports: [
        RouterModule.forChild(CustomerRoutes)
    ],
    declarations: [
        CustomerListComponent
    ]
})
export class CustomerModule { }
