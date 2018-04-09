import { Validators as FormValidators, ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";

export class Validators {

    private static messages = {
        required: "Pole je povinné.",
        min: "Minimální hodnota je %min%.",
        max: "Maximální hodnota je %max%.",
        email: "E-mailová adresa není platná.",
        minLength: "Minimální délka je %requiredLength% znaků.",
        maxLength: "Maximální délka je %requiredLength% znaků.",
        pattern: "Zadejte správný formát."
    };

    static min(min: number): ValidatorFn {
        var result = FormValidators.min(min);
        if(result && ("min" in result))
            result["min"]["message"] = Validators.messages.min.split("%min%").join(result["min"]["min"]);

        return result
    }
  
    static max(max: number): ValidatorFn {
        var result = FormValidators.max(max);
        if(result && ("max" in result))
            result["max"]["message"] = Validators.messages.max.split("%max%").join(result["max"]["max"]);

        return result
    }
  
    static required(control: AbstractControl): ValidationErrors|null {
        var result = FormValidators.required(control);
        if(result && ("required" in result))
            result["required"] = {
                'required': true,
                "message": Validators.messages.required
            };

        return result
    }
  
    static requiredTrue(control: AbstractControl): ValidationErrors|null {
        var result = FormValidators.requiredTrue(control);
        if(result && ("required" in result))
            result["required"] = {
                'required': true,
                "message": Validators.messages.required
            };

        return result
    }
  
    static email(control: AbstractControl): ValidationErrors|null {
        var result = FormValidators.email(control);
        if(result && ("email" in result))
            result["email"] = {
                'email': true,
                "message": Validators.messages.email
            };

        return result
    }
  
    static minLength(minLength: number): ValidatorFn {
        var result = FormValidators.minLength(minLength);
        if(result && ("minlength" in result))
            result["minlength"]["message"] = Validators.messages.minLength.split("%requiredLength%").join(result["minLength"]["requiredLength"]);

        return result;
    }
  
    static maxLength(maxLength: number): ValidatorFn {
        var result = FormValidators.maxLength(maxLength);
        if(result && ("maxlength" in result))
            result["maxlength"]["message"] = Validators.messages.maxLength.split("%requiredLength%").join(result["maxlength"]["requiredLength"]);

        return result;
    }
  
    static pattern(pattern: string|RegExp): ValidatorFn {
        var result = FormValidators.pattern(pattern);
        if(result && ("pattern" in result))
            result["pattern"]["message"] = Validators.messages.pattern;

        return result;
    }
  
    static nullValidator(c: AbstractControl): ValidationErrors|null { return null; }
  }