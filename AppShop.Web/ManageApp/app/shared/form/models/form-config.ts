import { FormGroup } from "@angular/forms";

import { Box, ElementSize } from './../';

export class FormConfig{
    public boxes: Box[] = [];
    public showCancelButton = true;

    constructor(private formBuilder: FormGroup){
    }

    addBox(name: string, size: ElementSize = ElementSize.col_12, showTitle = true): Box{
        let box = new Box(name, size, showTitle);
        this.boxes.push(box);
        return box;
    }

    setDefaultValues(values: any){
        this.formBuilder.patchValue(values);
    }

    get form(): FormGroup{
        return this.formBuilder;
    }
}