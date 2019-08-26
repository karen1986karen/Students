import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(all: any, email: any): any{
    if( email === undefined){
      return all;
    }
      return all.filter((item)=>{
      return item.email.toLowerCase().includes(email.toLowerCase());
   })
  }

}
