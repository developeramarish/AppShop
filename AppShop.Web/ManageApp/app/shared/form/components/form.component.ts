import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { FormConfig } from '@app/shared/form';

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html"
})
export class FormComponent {
    @Input("config") config: FormConfig;
    @Output("onSuccess") onSuccessHandler = new EventEmitter;

    constructor(private activatedRoute: ActivatedRoute, router: Router) {}

    onSubmit(){
        let form = this.config.form;
        this.validateAllFields(form);
        if(form.valid)
            this.onSuccessHandler.emit(form.value);
        else
            window.scrollTo(0, 0);
    }

    validateAllFields(formGroup: FormGroup): void {
        Object.keys(formGroup.controls).forEach(field => {
            let control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched();
            } else if (control instanceof FormGroup) {
                this.validateAllFields(control);
            }
        });
    }

    get backlink(): string | null{
        if(!this.activatedRoute.parent)
            return null;

        return this.activatedRoute.parent.snapshot.pathFromRoot
            .map(s => s.url).reduce((a, e) => a.concat(e)).map(s => s.path).join("/");
    }
}