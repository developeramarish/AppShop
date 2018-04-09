import { Type } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Control } from './';
import { ElementSize, IControlComponent, IControl } from './../../';
import { TextareaControlComponent } from './../../components/controls/textarea-control.component';

export class TextareaControl extends Control implements IControl{
    component: Type<IControlComponent> = TextareaControlComponent;
    
    constructor(
        public control: FormControl,
        public label: string,
        public size: ElementSize = ElementSize.col_12
    ){ super(); }
}