import { Component, OnInit } from '@angular/core';
import * as tool from '../../../../lib/tool_module.js';
// import * as tool from '../../../lib/tool_module.js';
declare let $: any;
declare let tool1: any;
declare let tool2: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private mySelection: string = "";
  constructor() { }

  ngOnInit() {
  }
  deployType: string = "";
  isActive = false;

  callType(val: any) {
    this.mySelection = val;
    console.log('AAAA');
    console.log(val);
  }

  typeAssertion() {
    let message;
    message = 'abc';
    (message as string).startsWith('a');
  }

  testMe() {
    let list = document.getElementsByClassName('test');
    for (var i = 0; i < list.length; i++) {
      console.log(list[i]); //second console output
    }
  }

  onClick($event) {
    // HTMLAnchorElement
    let target: HTMLAnchorElement = $event.target as HTMLAnchorElement;
    // document.getElementsByClassName('nav-item');
    // target.className += " active";
    // console.log(document.getElementsByClassName('nav-item').length);
  }

  onClickMe() {
    let msg = 'abc';
    // HTMLCollection

    alert('fuck');
    console.log('TEST');
    $('.myTest').html('BBBB');
  }
  onClickTbl() {
    let $table = $('#table');
    let data = [
      {
        id: 0,
        name: 'Item 0',
        price: '$0'
      },
      {
        id: 1,
        name: 'Item 1',
        price: '$1'
      }
    ];
    $table.bootstrapTable({ data: data });
    // tool.tool1();
    tool1();
    tool2();
    tool.tool1_module();
    tool.tool2_module();
  }

  changeDeployType(value: string) {
    this.deployType = value;
    let tmp = document.getElementById('idCard2') as HTMLAnchorElement;
    tmp.innerHTML = this.deployType.toUpperCase();
    // console.log(this.deployType);
  }

}
