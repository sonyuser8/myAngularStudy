import { map, switchMap } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { AbstractControl, ValidationErrors, ValidatorFn, FormControl, AsyncValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {
  static httpService: HttpClient;

  hostPrefixRule$: Observable<string>;

  constructor(http: HttpClient) {
    CustomValidatorService.httpService = http;
  }
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
        console.log('AAA');
        if (control.value === 'mosh') {
          return resolve({ shouldBeUnique: true });
        } else {
          return resolve(null);
        }
      }, 1000);
    });
  }
  // async validator
  // static serverRuleCheck(control: AbstractControl): Promise<ValidationErrors | null> {

  // }
}
