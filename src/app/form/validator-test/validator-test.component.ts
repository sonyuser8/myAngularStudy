import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-validator-test',
  templateUrl: './validator-test.component.html',
  styleUrls: ['./validator-test.component.css']
})
export class ValidatorTestComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl()
  })
  constructor() { }

  ngOnInit() {
  }

  onEnter(username: HTMLInputElement) {
    console.log(username.value);
  }

}
