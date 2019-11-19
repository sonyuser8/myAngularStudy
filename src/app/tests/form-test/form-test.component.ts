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
    compartment: new FormControl(),
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
        location: new FormControl(''),
        name: new FormControl('')
      })
    );
    // New Form
    console.log(this.form.get('site').value);
    console.log(this.form.get('zone').value);

    // (this.form.get('hosts') as FormArray)

    // (this.form.get('hosts') as FormArray).controls

    // tslint:disable-next-line: forin
    // for (const control in (this.form.get('hosts') as FormArray).controls) {
    //   const host = (this.form.get('hosts') as FormArray).get(control);
    //   console.log(host);
    //   console.log(host.get('location').value);
    //   console.log(host.get('name').value);
    // }

    for (let item of (this.form.get('hosts') as FormArray).controls) {
      // console.log(item);
      console.log(item.get('location').value);
      console.log(item.get('name').value);
    }

  }

  onSubmit() {
    let result = this.form.value;
    console.log(result);
    console.log(JSON.stringify(result));
  }
}


// FormControl, FormGroup, FormArray
