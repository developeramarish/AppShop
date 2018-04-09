import { Type } from '@angular/core';

import { ElementSize, IControlComponent } from './../';

export interface IControl{
    component: Type<IControlComponent>,
    label: string,
    size: ElementSize
}