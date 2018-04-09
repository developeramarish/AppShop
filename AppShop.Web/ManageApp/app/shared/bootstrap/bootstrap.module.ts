import { NgModule } from "@angular/core";

import { BsDropdownModule, TooltipModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot()
    ],
    exports: [
        BsDropdownModule,
        TooltipModule
    ]
})
export class BootstrapModule{
}