import { Config } from './../../../interface/config';
import { AppConfigService } from './../../services/app-config.service';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Util } from '../../util/util';
import { ObjToStrPipe } from '../../pipe/obj-to-str.pipe';

@Component({
  selector: 'app-form-study',
  templateUrl: './form-study.component.html',
  styleUrls: ['./form-study.component.css']
})
export class FormStudyComponent implements OnInit {

  fab = new FormControl(this.appConfig.fab, Validators.required);

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  name = new FormControl(this.fab);
  constructor(private http: HttpClient, public appConfig: AppConfigService) {
  }
  ngOnInit() {
  }

  showTest() {
    console.log(this.fab.value);
  }
}
