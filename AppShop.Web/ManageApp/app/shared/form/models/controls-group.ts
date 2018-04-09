import { FormControl } from "@angular/forms";

import { IControl, ElementSize } from "./../";
import { TextControl, TextareaControl, CheckboxControl } from "./controls";

export abstract class ControlsGroup { 
    controls: IControl[] = [];

    addText(formControl: FormControl, label: string, size: ElementSize = ElementSize.col_12): TextControl{
        let control = new TextControl(formControl, label, size);
        this.controls.push(control);
        return control;
    }

    addTextarea(formControl: FormControl, label: string, size: ElementSize = ElementSize.col_12): TextareaControl{
        let control = new TextareaControl(formControl, label, size);
        this.controls.push(control);
        return control;
    }

    addCheckbox(formControl: FormControl, label: string, size: ElementSize = ElementSize.col_12): CheckboxControl{
        let control = new CheckboxControl(formControl, label, size);
        this.controls.push(control);
        return control;
    }
}