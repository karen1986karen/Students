import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastName'
})
export class LastNamePipe implements PipeTransform {

  transform(all: any, lastName: any): any{
    if( lastName === undefined){
      return all;
    }
      return all.filter((item)=>{
      return item.last_name.toLowerCase().includes(lastName.toLowerCase());
   })
  }

}
