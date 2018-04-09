import { Routes } from '@angular/router';

import { PaymentListComponent } from './components/payment-list/payment-list.component';

export const PaymentRoutes: Routes = [
    {
        path: 'payment',
        component: PaymentListComponent,
        data: { text: "Platby", icon: "payment.svg", inNav: true, breadcrumbs: true }
    }
];