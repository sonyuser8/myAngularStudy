import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Util } from '../../util/util';
import { ObjToStrPipe }  from '../../pipe/obj-to-str.pipe';

@Component({
  selector: 'app-form-study',
  templateUrl: './form-study.component.html',
  styleUrls: ['./form-study.component.css']
})
export class FormStudyComponent implements OnInit {
  name = new FormControl('');
  constructor(private http: HttpClient) { }
  ngOnInit() {

  }

  onClick() {
    console.log(this.name);
    console.log(this.name.value);
  }

}
