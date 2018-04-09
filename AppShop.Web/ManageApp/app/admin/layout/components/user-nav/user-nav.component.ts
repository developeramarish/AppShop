import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/auth/services/auth.service';

@Component({
    selector: 'app-user-nav',
    templateUrl: './user-nav.component.html'
})
export class UserNavComponent{ 

    constructor(
        private auth: AuthService,
        private router: Router
    ){}

    logout(){
        this.auth.logout();
        this.router.navigate(['/login']);
    }

}