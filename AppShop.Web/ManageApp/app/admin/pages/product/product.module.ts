import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
    ConfirmModule,
    BootstrapModule, 
    FormModule,
    ListModule, 
    NotifyModule } from '@app/shared';

import { ProductRoutes } from './product.routes';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductService } from './services/product.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProductRoutes),
        FormModule,
        ListModule,
        ConfirmModule,
        NotifyModule,
        BootstrapModule
    ],
    providers: [
        ProductService,
    ],  
    declarations: [
        ProductListComponent,
        ProductFormComponent
    ]
})
export class ProductModule {}
