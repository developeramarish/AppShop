import { Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const ProductRoutes: Routes = [
    {
        path: 'product',
        data: { text: "Produkty", icon: "product.svg", inNav: true, breadcrumbs: true },
        children: [
            {
                path: '',
                component: ProductListComponent
            },
            { 
                path: 'form', 
                component: ProductFormComponent, 
                data: { text: "Vytvoření", breadcrumbs: true } 
            },
            { 
                path: 'form/:id', 
                component: ProductFormComponent, 
                data: { text: "Editace", breadcrumbs: true } 
            }
        ]
    }
];