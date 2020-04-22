import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertgender'
})
export class ConverGenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    return value == 1 ? "Nam" : "Nữ";
  }

}