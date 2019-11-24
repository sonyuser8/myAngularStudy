import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { CustomValidatorService } from './../../services/custom-validator.service';
import { UsernameValidators } from './../../validator/username.validators';
import { Config } from './../../../interface/config';
import { FormControl, FormArray, FormGroup, Validators, AsyncValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  hostPrefix$: Observable<string>;
  obj;

  form = new FormGroup({
    username: new FormControl('',
      [Validators.required,
      CustomValidatorService.hostPrefixValidator('z12f')],
      [CustomValidatorService.shouldBeUnique,
      CustomValidatorService.serverRuleCheck]
    ),
  });
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  change() {
    this.form.get('username').setValue('YHJUANH');
  }
  log() {
    console.log(this.form.get('username'));
  }

  get username() {
    return this.form.get('username');
  }

  ttt(name: string) {
    console.log('In ttt');
  }

  changeLocation(el: HTMLSelectElement) {
    const requestOptions: Object = {
      /* other options here */
      responseType: 'text'
    }
    this.hostPrefix$ = this.http.get<string>('http://localhost:8080/getHostPrefixRule?location=' + el.value
      , requestOptions);
  }
}
