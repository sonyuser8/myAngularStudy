import { map, switchMap, debounceTime } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { AbstractControl, ValidationErrors, ValidatorFn, FormControl, AsyncValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {
  constructor(private http: HttpClient) {
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
  serverRuleCheck(inp: string) {
    const requestOptions: object = {
      responseType: 'text'
    };
    return (input: FormControl) => {
      return timer(500)
        .pipe(
          switchMap(() => this.http.get<string>('http://localhost:8080/getHostPrefixRule?location=AA', requestOptions)),
          map(res => {
            console.log(res);
            return { loginExist: true };
          })
        );
    };
  }
}
