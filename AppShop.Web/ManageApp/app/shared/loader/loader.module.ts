import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        MatProgressBarModule
    ],
    declarations: [
        LoaderComponent
    ],
    exports: [
        LoaderComponent
    ]
})
export class LoaderModule{
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LoaderModule,
            providers: [
                LoaderService
            ]
        };
    }
}