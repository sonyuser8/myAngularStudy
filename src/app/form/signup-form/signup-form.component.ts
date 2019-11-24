import { CustomValidatorService } from './../../services/custom-validator.service';
import { UsernameValidators } from './../../validator/username.validators';
import { Config } from './../../../interface/config';
import { FormControl, FormArray, FormGroup, Validators, AsyncValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { config } from 'rxjs';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  obj;

  form = new FormGroup({
    username: new FormControl('',
      [Validators.required,
      CustomValidatorService.hostPrefixValidator('z12f')],
      [ CustomValidatorService.shouldBeUnique,
        CustomValidatorService.serverRuleCheck ]
    ),
  });
  constructor() { }

  ngOnInit() {

    // this.username.vald
    // this.obj = JSON.parse('{"minlength":{"requiredLength":5,"actualLength":4},"maxlength":{"requiredLength":3,"actualLength":4}}');
    // console.log(this.obj);
    // console.log(this.obj['minlength']);
    // console.log(this.obj.minlength);
    // this.obj.fuck = 'test';
    // this.obj['fuck2'] = 'test2';
    // console.log(this.obj);
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

}
