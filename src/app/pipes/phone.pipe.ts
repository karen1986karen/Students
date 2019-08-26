import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

 
  transform(all: any, phone: any): any{
    if( phone === undefined){
      return all;
    }
      return all.filter((item)=>{
      return item.phone.toLowerCase().includes(phone.toLowerCase());
   })
  }
}
