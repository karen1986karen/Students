import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(all: any, studentName: any): any{
    if( studentName === undefined){
      return all;
    }
      return all.filter((item)=>{
      return item.name.toLowerCase().includes(studentName.toLowerCase());
   })
  }

}
