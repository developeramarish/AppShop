import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from '@app/shared/material';

import { NotifyService } from './services/notify.service';
import { NotifyComponent } from './components/notify/notify.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        NotifyComponent
    ],
    providers: [
        NotifyService
    ],
    entryComponents: [
        NotifyComponent
    ]
})
export class NotifyModule{
}