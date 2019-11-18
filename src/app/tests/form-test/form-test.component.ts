import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  form = new FormGroup({
    site: new FormControl(),
    zone: new FormControl(),
    location: new FormControl()
  });
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.form.get('site').value);
  }

}
