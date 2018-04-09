import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[control]'
})
export class ControlDirective{
    constructor(public viewContainerRef: ViewContainerRef){}
}