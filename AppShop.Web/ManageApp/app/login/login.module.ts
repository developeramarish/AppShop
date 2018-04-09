import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { LoaderModule, MaterialModule } from "@app/shared";

import { LoginComponent } from "./components/login/login.component";
import { LoginRoutes } from "./login.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(LoginRoutes),
        LoaderModule,
        MaterialModule
    ],
    declarations: [
        LoginComponent,
    ]
})
export class LoginModule {
}
