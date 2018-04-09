import { Component } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html'
})
export class NavComponent {
    items: any[] = [];

    constructor(private navService: NavService) {
        this.items = navService.getItems();
    }
}
