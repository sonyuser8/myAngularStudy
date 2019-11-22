import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-props-bind',
  templateUrl: './props-bind.component.html',
  styleUrls: ['./props-bind.component.css']
})
export class PropsBindComponent implements OnInit {
  constructor() { }

  username = 'YHJUANH';
  game = 'saga';

  ngOnInit() {
  }

}
