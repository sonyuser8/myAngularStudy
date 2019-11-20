import { Component, OnInit } from '@angular/core';
import { SiblingDataService } from '../sibling-data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  constructor(private data: SiblingDataService) {

  }

  ngOnInit() {
    console.log(this.data.myKeyMessage);
  }

}
