import { Component } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
    selector: 'app-mobile-nav',
    templateUrl: './mobile-nav.component.html'
})
export class MobileNavComponent {
    items: any[] = [];

    constructor(private navService: NavService) {
        this.items = navService.getItems();
    }
}
