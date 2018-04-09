import { Component, Input } from '@angular/core';

import { Box } from './../../';

@Component({
    selector: "box",
    templateUrl: "./box.component.html"
})
export class BoxComponent {
    @Input("config") config: Box;
}