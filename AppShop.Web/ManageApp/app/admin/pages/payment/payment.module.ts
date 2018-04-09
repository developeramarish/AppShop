import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentRoutes } from './payment.routes';

import { PaymentListComponent } from './components/payment-list/payment-list.component';

@NgModule({
    imports: [
        RouterModule.forChild(PaymentRoutes)
    ],
    declarations: [
        PaymentListComponent
    ]
})
export class PaymentModule { }
