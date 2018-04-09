import { Input, Component } from '@angular/core';
import { IControlComponent } from './../../';
import { TextControl } from './../../models/controls';

@Component({
    selector: "text-control",
    template: `
    <mat-form-field [formGroup]="control.parent" class="w-100">
        <span matPrefix *ngIf="control.prefix">{{ control.prefix }}</span>
        <input matInput [placeholder]="control.label" formControlName="{{ control.name }}">
        <span matSuffix *ngIf="control.suffix">{{ control.suffix }}</span>
        <mat-error *ngFor="let error of control.errors">
            {{ error }}
        </mat-error>
    </mat-form-field>
    `
})
export class TextControlComponent implements IControlComponent {
    @Input("control") control: TextControl;
    id = "c" + Math.random();
}