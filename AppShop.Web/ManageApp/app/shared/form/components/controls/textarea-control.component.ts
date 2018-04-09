import { Input, Component } from '@angular/core';
import { IControlComponent } from './../../';
import { TextareaControl } from './../../models/controls';

@Component({
    selector: "textarea-control",
    template: `
    <mat-form-field [formGroup]="control.parent" class="w-100">
        <textarea matInput [placeholder]="control.label" formControlName="{{ control.name }}"></textarea>
        <mat-error *ngFor="let error of control.errors">
            {{ error }}
        </mat-error>
    </mat-form-field>
    `
})
export class TextareaControlComponent implements IControlComponent {
    @Input("control") control: TextareaControl;
    id = "c" + Math.random();
}