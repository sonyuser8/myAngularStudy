import { Component, OnInit } from '@angular/core';
import { SiblingDataService } from '../sibling-data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  constructor(private data: SiblingDataService) { }
  ngOnInit() {
  }

  onClick( el : HTMLInputElement){
    console.log("U just input value:", el.value);
    this.data.myKeyMessage = el.value;
  }

}
