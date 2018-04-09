import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthService } from '@app/shared';

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./login.component.scss']
})
export class LoginComponent{
    private readonly metaTitlePostFIx = " - AppShop";
    disableReSubmit = false;
    invalidLogin: boolean = false;
    credentials = {
        username: "info@appshop.com",
        password: "Appshop-2018"
    };

    constructor(
        private router: Router,
        private metaTitle: Title,
        private authservice: AuthService,
        private route: ActivatedRoute)
    {
        metaTitle.setTitle("Přihlášení" + this.metaTitlePostFIx);
    }

    signIn() {
        this.disableReSubmit = true;
        this.authservice.login(this.credentials).subscribe(
            result => {
                if(result) {
                    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
                    this.router.navigate([returnUrl || '/admin']);
                }
                else
                    this.invalidLogin = true;
                    
                this.disableReSubmit = false;
            },
            error => {
                this.invalidLogin = true
                this.disableReSubmit = false;
            }
        );
    }
}