import { Routes } from '@angular/router';

import { LayoutComponent } from './layout/components/layout/layout.component';
import { AuthGuard } from '@app/shared/auth/services/auth-guard.sevice';

export const AdminRoutes: Routes = [
    {
        path: 'admin',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        loadChildren: './admin.module#AdminModule'
    }
];