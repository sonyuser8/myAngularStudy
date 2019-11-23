import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-study',
  templateUrl: './form-study.component.html',
  styleUrls: ['./form-study.component.css']
})
export class FormStudyComponent implements OnInit {

  constructor(private http: HttpClient) { }
  fab: string = '';
  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/posts',{responseType: 'text'}).subscribe(
      resp => {
        this.fab = 'test';
      }
    );
  }

}
