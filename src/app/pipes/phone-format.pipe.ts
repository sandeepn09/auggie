import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(number) {
    // number = number.charAt(0) != 1 ? "+1" + number : "" + number;
  
    let newStr = "";
    let i = 0;
  
    newStr = "+1 (" + number.substr(1, 3) + ") " + number.substr(4, 3) + "-" + number.substr(7, 4);
   
    return newStr;
  }

}
