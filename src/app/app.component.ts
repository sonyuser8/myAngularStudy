import { Component } from '@angular/core';
// import * as Const from './const';
import { AppConst, Fuck, CFG } from './const';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'test2019111601';

  test() {
    let state = new AppConst(1);
    // console.log(CFG.cfg1);
    console.log('before:' + state.count);
    this.increment(state);
    console.log('after:' + state.count);
  }

  increment(state: AppConst): AppConst {
    let NewObject = Object.assign({}, state, { count: state.count + 1 });
    // let NewObject = Object.assign({}, state, { });
    console.log(NewObject);
    return NewObject;
    // return state.count + 1;
  }
}
