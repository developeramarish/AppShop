import { Type } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Control } from './';
import { ElementSize, IControlComponent, IControl } from './../../';
import { TextControlComponent } from './../../components/controls/text-control.component';

export class TextControl extends Control implements IControl{
    component: Type<IControlComponent> = TextControlComponent;
    prefix = "";
    suffix = "";
    
    constructor(
        public control: FormControl,
        public label: string,
        public size: ElementSize = ElementSize.col_12
    ){ super(); }

    setPrefix(value: string): TextControl{
        this.prefix = value;
        return this;
    }

    setSuffix(value: string): TextControl{
        this.suffix = value;
        return this;
    }
}