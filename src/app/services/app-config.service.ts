import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  urlLocal = 'http://localhost:8080';
  fab = '';

  constructor(private http: HttpClient) { }

  async load() {
    await this.http.get(this.urlLocal + '/getFab', { responseType: 'text' }).toPromise().then(
      (data) => {
        console.log('Load Config Success in DataService');
        this.fab = data;
      }
    ).catch((error) => {
      console.log('ERROR!' + JSON.stringify(error));
    });
  }
}
