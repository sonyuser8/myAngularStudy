import { Util } from './../../util/util';
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

  form = new FormGroup({
    username: new FormControl('')
  });
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let tmp = [ 'tmp1' ];
    tmp.push('tmp2');
    tmp.push('tmp3');
    tmp.splice(1, 1);
    console.log(tmp);
    this.form.get('username').disable();
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

  async changeLocation(el: HTMLSelectElement) {
    const requestOptions: Object = {
      responseType: 'text'
    }
    this.hostPrefix$ = this.http.get<string>('http://localhost:8080/getHostPrefixRule?location=' + el.value
      , requestOptions);
    await this.http.get('http://localhost:8080/getHostPrefixRule?location=' + el.value, requestOptions).toPromise().then(
      (data: string) => {
        this.prefix = data;
      }
    ).catch((error) => {
      console.log('ERROR!' + JSON.stringify(error));
    });

    this.form.get('username').setValidators([CustomValidatorService.hostPrefixValidator(this.prefix)]);
    this.form.get('username').enable();
  }

  prefix = '';
}
