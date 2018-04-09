import { Input, Component } from '@angular/core';
import { IControlComponent } from './../../';
import { CheckboxControl } from './../../models/controls';

@Component({
    selector: "checkbox-control",
    template: `
    <div [formGroup]="control.parent" class="w-100 my-2">
        <mat-checkbox formControlName="{{ control.name }}">{{ control.label }}</mat-checkbox>
    </div>
    `
})
export class CheckboxControlComponent implements IControlComponent {
    @Input("control") control: CheckboxControl;
    id = "c" + Math.random();
}