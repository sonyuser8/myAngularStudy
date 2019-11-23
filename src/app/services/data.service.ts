import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlLocal = 'http://localhost:8080';
  fab = '';

  constructor(private http: HttpClient) {
    console.log('DataServiceService constructor entered!');
    this.loadConfig();
    console.log('DataServiceService constructor exit!');
  }

  async loadConfig() {
    console.log('Enter in DataService');
    await this.http.get(this.urlLocal + '/getFab', { responseType: 'text' }).toPromise().then(
      (data) => {
        console.log('Load Config Success in DataService');
        console.log(data);
      }
    ).catch((error) => {
      console.log('ERROR!' + JSON.stringify(error));
    });
    console.log('Exit in DataService');
  }
}
