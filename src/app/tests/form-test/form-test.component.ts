import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  constructor() { }

  form = new FormGroup({
    site: new FormControl(),
    zone: new FormControl(),
    hosts: new FormArray([])
    // location: new FormControl(),
  });
  index: number = 0;

  ngOnInit() {
  }
  onClick() {
    this.index++;
    (this.form.get('hosts') as FormArray).push(
      new FormGroup({
        location: new FormControl(this.index.toString()),
        name: new FormControl(this.index.toString())
      })
    );
    // new Form
    console.log(this.form.get('site').value);
    console.log(this.form.get('zone').value);

    // (this.form.get('hosts') as FormArray)

    // (this.form.get('hosts') as FormArray).controls

    // tslint:disable-next-line: forin
    for (const control in (this.form.get('hosts') as FormArray).controls) {
      const host = (this.form.get('hosts') as FormArray).get(control);
      console.log(host);
      console.log(host.get('location').value);
      console.log(host.get('name').value);
    }
  }
}


// FormControl, FormGroup, FormArray
