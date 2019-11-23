import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToStr'
})
export class ObjToStrPipe implements PipeTransform {

  transform(obj: object): string {
    return JSON.stringify(obj);
  }

}
