import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { LayoutModule } from "@app/admin/layout";

import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { ProductModule } from "./pages/product/product.module";
import { OrderModule } from './pages/order/order.module';
import { CustomerModule } from './pages/customer/customer.module';
import { ShippingModule } from "./pages/shipping/shipping.module";
import { PaymentModule } from "./pages/payment/payment.module";

import { AdminRoutes } from "./admin.routes";

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        LayoutModule,
        DashboardModule, 
        ProductModule,
        OrderModule,
        CustomerModule,
        ShippingModule,
        PaymentModule
    ]
})
export class AdminModule {
}
