import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CustomValidatorService } from './../../../services/custom-validator.service';
import { Config } from './../../../../interface/config';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators, AsyncValidator } from '@angular/forms';

@Component({
  selector: 'app-demo-async-validator',
  templateUrl: './demo-async-validator.component.html',
  styleUrls: ['./demo-async-validator.component.css']
})
export class DemoAsyncValidatorComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', Validators.required, this.loginAsyncValidator('tmp'))
  });
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  loginAsyncValidator(inp: string) {

    const requestOptions: object = {
      responseType: 'text'
    };
    return (input: FormControl) => {
      return this.http.get<string>('http://localhost:8080/getHostPrefixRule?location=AA', requestOptions)
        .pipe(
          map(res => {
            return { loginExist: true };
          })
        );
    };
  }

}
