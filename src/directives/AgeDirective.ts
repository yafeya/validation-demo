import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "../../node_modules/@angular/forms";
import { parse } from "querystring";

@Directive({
    selector: '[ageRevealed]',
    providers: [{ provide: NG_VALIDATORS, useExisting: AgeDirective, multi: true }]
})
export class AgeDirective implements Validator {

    validate(control: AbstractControl) {
        let errors: Boolean = false;
        let value = control.value
        if (value != undefined && value != '') {
            try {
                let age = Number.parseInt(value)
                errors = age < 0 || age >= 200 || Number.isNaN(age);
            }
            catch (error) {
                errors = true;
            }
        }
        return errors ? { 'ageRevealed': { value: control.value } } : null;
    }
}