import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-validator-test',
  templateUrl: './validator-test.component.html',
  styleUrls: ['./validator-test.component.css']
})
export class ValidatorTestComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });
  constructor() { }
  ngOnInit() {

  }

  onEnter(username: HTMLInputElement) {
    console.log(username.value);
  }

  onClick() {
    console.log("this.form.invalid:", this.form.invalid);
  }

  get username() {
    return this.form.get('username');
  }

}
