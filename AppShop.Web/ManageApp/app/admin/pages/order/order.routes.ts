import { Routes } from '@angular/router';

import { OrderListComponent } from './components/order-list/order-list.component';

export const OrderRoutes: Routes = [
    {
        path: 'order',
        component: OrderListComponent,
        data: { text: "Objednávky", icon: "order.svg", inNav: true, breadcrumbs: true }
    }
];