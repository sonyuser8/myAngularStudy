import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class UsernameValidators {
  // pure validator
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 1) {
      return { cannotContainSpace: true };
    }
  }
  // pure validator with function
  static hostPrefixValidator(hostPrefix: string): ValidatorFn {
    return (control: AbstractControl) => {
      const host = control.value as string;
      if (!host.startsWith(hostPrefix)) {
        return { hostPrefixViolation: true };
      }
      return null;
    };
  }
  // async validator
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mosh') {
          return resolve({ shouldBeUnique: true });
        } else {
          return resolve(null);
        }
      }, 2000);
    });
  }
}
