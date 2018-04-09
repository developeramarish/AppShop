import { FormGroup, FormArray, AbstractControl } from "@angular/forms";

export abstract class Control {
    control: AbstractControl;

    get name(){
        let group = this.control.parent.controls;
        return Object.keys(group).find(name => this.control === group[name]) || null;
    }

    get parent(): FormGroup | FormArray {
        return this.control.parent;
    }

    get errors(): string[] | null{
        let errors: string[] = [];

        if(this.control.errors){
            for(let key in this.control.errors){
                let error = this.control.errors[key];
                if(error instanceof Object && "message" in error)
                    errors.push(error.message);
                else
                    errors.push("Nespecifikovaná chyba " + key + ".");
            }
        }

        return errors.length > 0 ? errors : null;
    } 

    get isRequired(): boolean{
        if (this.control.validator) {
            const validator = this.control.validator({} as AbstractControl);
            if (validator && validator.required) {
                return true;
            }
        }
        return false;
    }

    get isPending(): boolean{
        return this.control.pending;
    }

    get hasError(): boolean{
        return (this.control.dirty && this.control.invalid);
    }
}