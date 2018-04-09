import { Routes } from '@angular/router';

import { CustomerListComponent } from './components/customer-list/customer-list.component';

export const CustomerRoutes: Routes = [
    {
        path: 'customer',
        component: CustomerListComponent,
        data: { title: "Zákaznící", icon: "customer.svg", inNav: true }
    }
];