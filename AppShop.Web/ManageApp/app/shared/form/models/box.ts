import { ElementSize } from './../';
import { ControlsGroup } from './../models/controls-group';

export class Box extends ControlsGroup {
    constructor(
        public name: string,
        public size: ElementSize = ElementSize.col_12,
        public showTitle: boolean = true
    ){ super(); }
}