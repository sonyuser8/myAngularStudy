import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {
  url: string = 'http://jsonplaceholder.typicode.com/posts';
  data$: Observable<any[]>;
  testBool: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data$ = this.http.get<any[]>(this.url).pipe(
      map(res => {
        return res;
      })
    );
  }

  onClick() {
  }

  jsonToStr(obj: any) {
    return JSON.stringify(obj);
  }

  toggle(){
    this.testBool = !this.testBool;
  }

}
