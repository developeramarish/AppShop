import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoaderService } from '@app/shared/loader';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';

import { AuthService } from './../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private auth: AuthService,
        private loader: LoaderService,
        private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.token}`
            }
        });

        return next.handle(req)
            .do((event) => {
                    this.loader.show();
                },(err: any) => {
                    if(err.status === 401){
                        this.auth.logout();
                        this.router.navigate(['/login']);
                    }
                })
            .finally(() => {
                this.loader.hide();
            });
    }

}