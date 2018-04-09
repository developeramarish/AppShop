import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/shared/material/material.module';

import { ConfirmService } from './services/confirm.service';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        ConfirmComponent
    ],
    providers: [
        ConfirmService
    ],
    entryComponents: [
        ConfirmComponent
    ]
})
export class ConfirmModule{
}