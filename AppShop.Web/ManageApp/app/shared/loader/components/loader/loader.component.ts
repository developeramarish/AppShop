import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

import { AuthService } from '@app/shared/auth';
import { LoaderService } from "./../../services/loader.service";

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html'
})
export class LoaderComponent{ 
    show = false;
    private subscription: Subscription;

    constructor(private loaderService: LoaderService){
        this.subscription = this.loaderService.state$
            .subscribe((show) => {
                this.show = show; 
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}