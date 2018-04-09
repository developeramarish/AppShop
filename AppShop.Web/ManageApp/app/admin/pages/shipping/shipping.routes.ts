import { Routes } from '@angular/router';

import { ShippingListComponent } from './components/shipping-list/shipping-list.component';

export const ShippingRoutes: Routes = [
    {
        path: 'shipping',
        component: ShippingListComponent,
        data: { text: "Dopravci", icon: "shipping.svg", inNav: true, breadcrumbs: true }
    }
];