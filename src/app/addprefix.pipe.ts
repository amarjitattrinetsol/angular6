import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addprefix'
})
export class AddprefixPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'Mr. ' + value;
  }

}
