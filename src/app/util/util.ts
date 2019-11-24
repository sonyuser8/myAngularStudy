
export class Util {
  // tslint:disable-next-line: ban-types
  static requestOptionsOfText = {
    /* other options here */
    responseType: 'text'
  }
  static jsonToStr(obj: any): string {
    return JSON.stringify(obj);
  }

}
