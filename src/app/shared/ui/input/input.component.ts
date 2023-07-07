import { Component, forwardRef, Host, Optional, SkipSelf } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';


const ValidationType = {
  required: 'Campo obrigatório',
  minlength: 'Tamanho mínimo de {0} caracteres',
  maxlength: 'Tamanho máximo de {0} caracteres',
} as any;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ],
})
export class InputComponent implements ControlValueAccessor {

  constructor(@Optional() @Host() @SkipSelf() public ngControl: ControlContainer) {


  }

  control: FormControl = new FormControl('');
  onChanged: Function = () => { };
  onTouched: Function = () => { };

  writeValue(value: any): void {
    this.control?.setValue(value);
  }

  registerOnChange(fn: Function) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  validation(validation: ValidationErrors | null | undefined): string[] | undefined {

    const errors = [];

    for (const key in validation) {
      if (Object.prototype.hasOwnProperty.call(validation, key)) {

        if (['maxlength', 'minlength'].includes(key)) {
          errors.push((ValidationType[key] as string).replace('{0}', validation[key].requiredLength));
        } else {
          errors.push(ValidationType[key]);
        }

      }
    }

    return errors;
  }

  validate(control: AbstractControl): ValidationErrors | null{

    if (control) {
      this.control?.setValidators(control.validator);
      // this.control = control;
    }

    return null
  }
}
