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

  urlLocal = 'http://localhost:8080';
  fab = '';

  test = new FormControl('', Validators.required);

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  name = new FormControl(this.fab);
  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    console.log('FormStudyComponent constructor entered!');
    let obj = { fab: 'F14A', phase: 'P1' };
    let cfg: Config = (obj as Config);
    console.log(obj['fab']);
    console.log(obj['phase']);
    console.log(cfg.fab);
    console.log(cfg.phase);
    console.log('FormStudyComponent constructor EXIT!');
  }
  ngOnInit() {
    this.test.setValue(this.appConfig.fab);
  }

  showTest() {
    console.log(this.test.value);
  }
}
