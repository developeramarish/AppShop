import { Type } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Control } from './';
import { ElementSize, IControlComponent, IControl } from './../../';
import { CheckboxControlComponent } from './../../components/controls/checkbox-control.component';

export class CheckboxControl extends Control implements IControl{
    component: Type<IControlComponent> = CheckboxControlComponent;
    
    constructor(
        public control: FormControl,
        public label: string,
        public size: ElementSize = ElementSize.col_12
    ){ super(); }
}