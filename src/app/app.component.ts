import { Component } from '@angular/core';
import * as tool from '../../lib/tool_module.js';
declare let $: any;
declare let tool1: any;
declare let tool2: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2019111601';
  isActive = false;
  mySelection="";

  callType(val:any)  {
    this.mySelection = val;
    console.log('AAAA');
    console.log(val);
  }

  onClick(){
    // HTMLAnchorElement
    console.log("AAA");
    this.isActive = !this.isActive;
    // HTMLElement el = document.getElementById('content');

    // let target = event.target;
    // HTMLLinkElement target2 = event.target as HTMLLinkElement;
    // console.log(target);
  }

  onClickMe() {
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
    $table.bootstrapTable({ data:data });
    // tool.tool1();
    tool1();
    tool2();
    tool.tool1_module();
    tool.tool2_module();
  }
}
