import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let result="";
     for (let index = 0; index < value.length; index++) {
       result = value[index] + result;
     }
    return result;
  }

}
