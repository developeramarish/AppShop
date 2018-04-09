import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routes';

import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild(DashboardRoutes)
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
