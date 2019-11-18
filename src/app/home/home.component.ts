import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fruits: string[] = ['Apple', 'Orange', 'Banana'];

  remove(item: string) {
    console.log(this.fruits.indexOf(item));
    const index: number = this.fruits.indexOf(item);
    this.fruits.splice(index, 1);
  }

}
