import { Config } from './../../../interface/config';
import { AppConfigService } from './../../services/app-config.service';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Util } from '../../util/util';
import { ObjToStrPipe } from '../../pipe/obj-to-str.pipe';

@Component({
  selector: 'app-form-study',
  templateUrl: './form-study.component.html',
  styleUrls: ['./form-study.component.css']
})
export class FormStudyComponent implements OnInit {

  phaseOptions$: Observable<string[]>;
  locationOptions$: Observable<string[]>;

  form = new FormGroup({
    fab: new FormControl(this.appConfig.fab, Validators.required),
    phase: new FormControl(''),
    location: new FormControl(''),
  });

  constructor(private http: HttpClient, public appConfig: AppConfigService) {
  }
  ngOnInit() {
    this.phaseOptions$ = this.http.get<string[]>("http://localhost:8080/getPhase");
  }
  onChange(el: HTMLElement) {
    console.log(el.getAttribute('formcontrolname'));
    const fieldName = el.getAttribute('formcontrolname') as string;
    switch (fieldName) {
      case 'phase': {
        this.locationOptions$ = this.http.get<string[]>('http://localhost:8080/getLocation?phase=' + (el as HTMLSelectElement).value)
          .pipe(map(resp => {
              console.log(resp);
              // options's best pracive
              this.form.get('location').setValue('');
              return resp;
            }));
        break;
      }
      default: {
        break;
      }
    }
  }

  clearOptionOfFormControl(resp) {
    return resp;
  }

  showForm() {
    console.log(this.form.value);
  }

  logIt(item: string) {
    console.log(this.form.get(item));
  }

  changePhase() {
    this.form.get('phase').setValue('P2');
  }
}
