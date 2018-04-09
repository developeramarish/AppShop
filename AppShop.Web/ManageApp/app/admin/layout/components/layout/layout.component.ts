import { Component, ViewEncapsulation } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

@Component({
    selector: 'app',
    templateUrl: './layout.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    constructor(){
        fontawesome.library.add(brands);
    }
}