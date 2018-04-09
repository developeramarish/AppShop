import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { AuthModule, LoaderModule } from '@app/shared';
import { AdminModule } from "@app/admin";
import { LoginModule } from '@app/login';

import { AppComponent } from '@app/app.component';

@NgModule({
    imports: [
        RouterModule.forRoot([]),
        LoaderModule.forRoot(),
        AuthModule,
        AdminModule,
        LoginModule
    ],
    declarations: [
        AppComponent
    ]
})
export class AppModule {
}
