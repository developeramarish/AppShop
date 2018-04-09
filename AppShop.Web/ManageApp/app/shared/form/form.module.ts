import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@app/shared/material";

import { ControlDirective } from './directives/control.directive';

import { FormComponent } from './components/form.component';
import { BoxComponent } from './components/box/box.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TextControlComponent } from './components/controls/text-control.component';
import { TextareaControlComponent } from './components/controls/textarea-control.component';
import { CheckboxControlComponent } from './components/controls/checkbox-control.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([]),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ControlDirective,
        FormComponent,
        BoxComponent,
        LoaderComponent,
        TextControlComponent,
        TextareaControlComponent,
        CheckboxControlComponent
    ],
    entryComponents: [
        TextControlComponent,
        TextareaControlComponent,
        CheckboxControlComponent
    ],
    exports: [
        FormComponent
    ]
})
export class FormModule {}