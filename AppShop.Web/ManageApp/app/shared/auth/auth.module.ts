import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthGuard } from './services/auth-guard.sevice';
import { AuthService } from './services/auth.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ]
})
export class AuthModule{}