import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 1) {
      return { cannotContainSpace: true };
    }
  }

  static tmpUserValidator(user: string): ValidatorFn {
    return (control: AbstractControl) => {
      let val = control.value;
      if (val === user){
        return { tmpUserValidator: true };
      }
      return null;
    };
  }
}
