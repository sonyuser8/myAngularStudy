import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  constructor() { }
  get site() {
    return this.form.get('site');
  }

  index: number = 0;
  form = new FormGroup({
    site: new FormControl('', [Validators.required, Validators.minLength(3)]),
    compartment: new FormControl(),
    zone: new FormControl(),
    hosts: new FormArray([])
    // location: new FormControl(),
  });
  onClick() {
    this.index++;
    (this.form.get('hosts') as FormArray).push(
      new FormGroup({
        location: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required)
      })
    );
    console.log(this.form.get('site').value);
    console.log(this.form.get('zone').value);

    for (let item of (this.form.get('hosts') as FormArray).controls) {
      // console.log(item);
      console.log(item.get('location').value);
      console.log(item.get('name').value);
    }
  }
  onTest() {
    // console.log(( (this.form.get('hosts') as FormArray).controls[0] as FormGroup).get('location') );
    // (this.form.get('hosts') as FormArray)
  }
  onTest2(obj) {
    console.log('CKPT1:', obj);
    return false;
  }

  ngOnInit() {
  }
  onSubmit() {
    // let result = this.form.value;
    console.log('Form Valid?', this.form.valid);
    console.log(JSON.stringify(this.form.value));
  }

  log() {
    // let result = this.form.value;
    console.log(this.form);
  }
}


// FormControl, FormGroup, FormArray
