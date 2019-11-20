
export class AppConst {
  count: number = 0;
  myStr: string = 'test';
  static myFisrStatic(){
    console.log("This is a static method in class!");
  }
  constructor(cnt: number) {
    this.count = cnt;
  }
}

export function doHAHA(){
  console.log('TEST');
}

export const Fuck = 'FUCK';

export const CFG = { cfg1: 'this is cfg1', cfg2: 'this is cfg2' };


