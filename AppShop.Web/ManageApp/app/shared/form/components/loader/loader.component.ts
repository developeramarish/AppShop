import { Component, Input, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';

import { IControlComponent, IControl } from './../../';
import { ControlDirective } from './../../directives/control.directive';

@Component({
    selector: "control-loader",
    template: `<ng-template control></ng-template>`
})
export class LoaderComponent implements OnInit{
    @Input("control") control: IControl;
    @ViewChild(ControlDirective) controlDirective: ControlDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver){}

    ngOnInit() {
        this.loadControlComponent();
    }

    loadControlComponent(){
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.control.component);

        let viewContainerRef = this.controlDirective.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);

        (<IControlComponent>componentRef.instance).control = this.control;
    }
}