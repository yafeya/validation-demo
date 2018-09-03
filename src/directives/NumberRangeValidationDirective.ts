import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";
import { parse } from "querystring";

@Directive({
    selector: '[numberRangeValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: NumberRangeValidationDirective, multi: true }]
})
export class NumberRangeValidationDirective implements Validator {

    @Input() min: number = 0;
    @Input() max: number = 100;

    validate(control: AbstractControl) {
        let errors: Boolean = false;
        let value = control.value
        if (value == null) {
            errors = false;
        }
        else {
            errors = this.isValueValid(value);
        }

        return errors ? { 'numberOutofRange': { value: control.value, min: this.min, max: this.max } } : null;
    }

    private isValueValid(value: any) {
        let errors: boolean = false;
        if (value != undefined && value != '') {
            try {
                let regex = /^[0-9]+$/;
                let success = regex.test(value)
                let num = Number.parseInt(value);
                let min = Number.parseInt(this.min.toString());
                let max = Number.parseInt(this.max.toString());
                errors = !success || num < min || num > max || Number.isNaN(num);
            }
            catch (error) {
                errors = true;
            }
        }
        else {
            errors = true;
        }
        return errors;
    }
}