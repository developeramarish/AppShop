import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

export const DashboardRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
        data: { text: "Přehled", icon: "dashboard.svg", inNav: true, breadcrumbs: true }
    }
];